import { RouteObject } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import ProductIndex from "./views/Products/Index";
import ManageProduct from "./views/Products/Manage";
import CategoryIndex from "./views/Categories/Index";
import OrderIndex from "./views/Orders/Index";
import OrderShow from "./views/Orders/Show";

const adminRoutes: RouteObject[] = [
  {
    path: "",
    element: <Dashboard />,
  },
  {
    path: "products",
    element: <ProductIndex />,
  },
  {
    path: "products/create",
    element: <ManageProduct />,
  },
  {
    path: "products/:id/edit",
    element: <ManageProduct />,
  },
  {
    path: "categories",
    element: <CategoryIndex />,
  },
  {
    path: "orders",
    element: <OrderIndex />,
  },
  {
    path: "orders/:code",
    element: <OrderShow />,
  },
];

export default adminRoutes;
