/**
 * category controller
 */

import { factories } from "@strapi/strapi";
import { createMidtransTransaction } from "../../../services/midtrans";

interface OrderItemRequestData {
  product_id: number;
  quantity: number;
}

interface OrderRequestData {
  customer_phone: string;
  customer_name: string;
  customer_email: string;
  order_type: "DINE_IN" | "TAKE_AWAY";
  order_notes: string;
  table_no: number;
  order_items: OrderItemRequestData[];
}

export default factories.createCoreController(
  "api::order.order",
  ({ strapi }) => ({
    async checkout(ctx) {
      // data from request body
      try {
        const data: OrderRequestData = ctx.request.body;

        // customer first get by phone or create
        // let customer = await strapi.db.query("api::customer.customer").findOne({
        //   where: {
        //     phone: data.customer_phone,
        //   },
        // });

        // if (!customer) {
        //   customer = await strapi.db.query("api::customer.customer").create({
        //     data: {
        //       phone: data.customer_phone,
        //       name: data.customer_name,
        //       email: data.customer_email,
        //     },
        //   });
        // }

        // order item -> cart
        const orderedProductIds = data.order_items.map(
          (item) => item.product_id
        );
        // product searching by ids

        const orderedProducts = await strapi.db
          .query("api::product.product")
          .findMany({
            where: {
              id: orderedProductIds,
            },
            populate: {
              thumbnail: true,
            },
          });

        if (orderedProducts.length !== orderedProductIds.length) {
          return ctx.badRequest("Some products not found");
        }

        // loop products
        const orderedItems = orderedProducts.map((product) => {
          // find ordered item by product id in order_items
          const orderedItem = data.order_items.find(
            (item) => item.product_id === product.id
          );

          return {
            product_title: product.title,
            product_price: product.price,
            product_thumbnail: product.thumbnail,
            quantity: orderedItem.quantity,
            subtotal: product.price * orderedItem.quantity,
          };
        });

        console.log(orderedItems);
        // calculation subtotal, tax, total
        const subtotal = orderedItems.reduce(
          (acc, item) => acc + item.subtotal,
          0
        );
        const tax = subtotal * 0.11; // 11% tax
        const total = subtotal + tax;

        // generate order code
        const orderCode = `POS-${new Date()
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "")}${Math.floor(Math.random() * 90000)}`;

        const { order_items, ...requestData } = data;

        // create order
        const payload: any = {
          ...requestData,
          order_items: orderedItems,
          subtotal,
          tax,
          grand_total: total,
          order_status: "pending_payment",
          payment_status: "unpaid",
          order_code: orderCode,
          order_date: new Date(), // unix timestamp
        };

        const order = await strapi.documents("api::order.order").create({
          data: { ...payload },
        });

        // create midtrans transaction
        const midtransPayload = {
          transaction_details: {
            order_id: order.order_code,
            gross_amount: order.grand_total,
          },
          customer_details: {
            first_name: data.customer_name,
            last_name: data.customer_name,
            email: data.customer_email,
            phone: data.customer_phone,
          },
        };

        const response = await createMidtransTransaction(midtransPayload);

        await strapi.db.query("api::order.order").update({
          where: {
            id: order.id,
          },
          data: {
            midtrans_transaction_id: response.transaction_id,
          },
        });

        return ctx.created({
          ...order,
          midtrans: response,
        });
      } catch (error) {
        console.log(error);
        return ctx.badRequest("Failed to checkout order");
      }
    },
  })
);
