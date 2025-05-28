export default {
  routes: [
    {
      method: "POST",
      path: "/orders/checkout",
      handler: "order.checkout",
    },
    {
      method: "POST",
      path: "/orders/webhook",
      handler: "order.webhook",
    },
  ],
};
