/**
 * category controller
 */

import { factories } from "@strapi/strapi";
import { createMidtransTransaction } from "../../../services/midtrans";
import { midtransBaseUrl } from "../../../constants";

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
  qris_url: string;
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

        console.log("responseActions", response.actions[0].url);

        const qrisUrl = response.actions[0].url;

        const finalOrder = await strapi.db.query("api::order.order").update({
          where: {
            id: order.id,
          },
          data: {
            midtrans_transaction_id: response.transaction_id,
            qris_url: qrisUrl,
          },
        });

        return ctx.created({
          ...order,
          midtrans_transaction_id: response.transaction_id,
          qris_url: qrisUrl,
          midtrans: response,
        });
      } catch (error) {
        console.log(error);
        return ctx.badRequest("Failed to checkout order");
      }
    },
    async webhook(ctx) {
      if (!ctx.request.body) {
        return ctx.badRequest("Request body is required");
      }

      if (!ctx.request.body.midtrans_transaction_id) {
        return ctx.badRequest("midtrans_transaction_id is required");
      }

      const { midtrans_transaction_id } = ctx.request.body;

      const transactionResponse = await fetch(
        `${midtransBaseUrl}/v2/${midtrans_transaction_id}/status`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Basic ${Buffer.from(
              `${process.env.MIDTRANS_SERVER_KEY}:`
            ).toString("base64")}`,
          },
        }
      );

      const result: any = await transactionResponse.json();

      // get order by midtrans_transaction_id

      const order = await strapi.db.query("api::order.order").findOne({
        where: {
          midtrans_transaction_id: midtrans_transaction_id,
        },
      });

      // check if order does not exist, if not exist, then return 400
      if (!order) {
        return ctx.badRequest("Order not found");
      }
      // check if payment status is success, if success, then ignore with status 200
      if (order.order_status !== "pending_payment") {
        return { success: true, message: "Order already processed" };
      }

      const transactionStatus = result.transaction_status;
      let payment_status = order.payment_status;
      let order_status = order.order_status;
      let paid_at = null;

      if (transactionStatus == "settlement") {
        payment_status = "paid";
        order_status = "processing";
        paid_at = new Date();
      } else if (transactionStatus == "cancel") {
        payment_status = "cancelled";
        order_status = "cancelled";
      } else if (transactionStatus == "expire") {
        payment_status = "expired";
        order_status = "cancelled";
      }

      // update table order with latest payment status and order status, paid_at, payment_log
      await strapi.db.query("api::order.order").update({
        where: {
          id: order.id,
        },
        data: {
          order_status,
          payment_status,
          payment_log: JSON.stringify(result),
          paid_at,
        },
      });

      return {
        message: "webhook received",
        sucess: true,
      };
    },
  })
);
