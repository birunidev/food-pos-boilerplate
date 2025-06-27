export interface OrderedItem {
  product_title: string;
  product_thumbnail: string;
  quantity: number;
  product_price: number;
  subtotal: number;
}

export interface IOrder {
  id: number;
  documentId: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string | null;
  subtotal: number;
  tax: number;
  grand_total: number;
  order_date: string;
  table_no: string;
  order_code: string;
  payment_status: "unpaid" | "paid";
  paid_at: string | null;
  payment_log: unknown | null;
  midtrans_transaction_id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  order_status: "pending_payment" | "processing" | "completed" | "cancelled";
  order_type: "DINE_IN" | "TAKE_AWAY";
  order_notes: string;
  qris_url: string;
  ordered_items: OrderedItem[];
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const getOrderPaidEmailTemplate = ({ order }: { order: IOrder }) => {
  const BASE_URL = process.env.BASE_URL || "http://localhost:1337";
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>My Food E-Receipt</title>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f9f9f9;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 20px;">
      <tr>
        <td>
          <table width="600" align="center" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 1px solid #e0e0e0; padding: 20px;">
            <tr>
              <td align="center" style="font-size: 24px; font-weight: bold;">
                🍴 <span style="color: #b00020;">My Food</span>
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size: 18px; font-weight: bold; padding: 10px 0;">
                E-Receipt
              </td>
            </tr>
            <tr>
              <td align="center" style="color: #888; font-size: 12px;">
                Order Code: #${order.order_code}
              </td>
            </tr>

            <tr><td style="padding-top: 20px; font-weight: bold;">Customer Information</td></tr>
            <tr><td style="padding-top: 5px;">Table: 5A</td></tr>
            <tr><td>Name: ${order.customer_name}</td></tr>
            <tr><td>Email: ${order.customer_email}</td></tr>
            <tr><td>Phone: ${order.customer_phone}</td></tr>
            <tr><td>Additional Notes: ${order.order_notes}</td></tr>

            <tr><td style="padding-top: 20px; font-weight: bold;">Order Information</td></tr>
            <tr><td style="padding-top: 5px;">Order Date: ${order.order_date}</td></tr>
            <tr><td>Paid Date: ${order.paid_at}</td></tr>
            <tr><td>Payment Status: <strong>${order.payment_status}</strong></td></tr>

            <tr><td style="padding-top: 20px; font-weight: bold;">Product Details</td></tr>

            <tr>
              <td style="padding-top: 10px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                ${order.ordered_items
                  .map(
                    (item) => `<tr>
                    <td width="50">
                      <img src="${BASE_URL}${item.product_thumbnail}" width="50" height="50" alt="Spinach" style="display:block;" />
                    </td>
                    <td style="padding-left: 10px;">${item.product_title} – ${item.quantity}x</td>
                    <td align="right">${formatCurrency(item.subtotal)}</td>
                  </tr>`
                  )
                  .join("")}
                </table>
              </td>
            </tr>

            <tr><td style="border-top: 1px solid #e0e0e0; margin-top: 10px; padding-top: 10px;"></td></tr>
            <tr>
              <td>
                <table width="100%">
                  <tr>
                    <td>Sub Total:</td>
                    <td align="right"> ${formatCurrency(order.subtotal)}</td>
                  </tr>
                  <tr>
                    <td>Tax (10%):</td>
                    <td align="right"> ${formatCurrency(order.tax)}</td>
                  </tr>
                  <tr>
                    <td><strong>Grand Total:</strong></td>
                    <td align="right"><strong> ${formatCurrency(order.grand_total)}</strong></td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr><td style="padding-top: 30px; font-size: 12px; color: #888;" align="center">Thank you for your order!</td></tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
