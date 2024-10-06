import { RouteObject } from "react-router-dom";
import Home from "./views/Home";
import MyOrders from "./views/MyOrders";
import MyOrderDetail from "./views/MyOrderDetail";

const clientRoutes: RouteObject[] = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "my-orders",
    element: <MyOrders />,
  },
  {
    path: "my-orders/:code",
    element: <MyOrderDetail />,
  },
];

export default clientRoutes;
