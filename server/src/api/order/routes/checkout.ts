export default {
  routes: [
    {
      method: "POST",
      path: "/orders/checkout",
      handler: "order.checkout",
    },
  ],
};
