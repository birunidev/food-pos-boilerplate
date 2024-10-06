import { RouteObject } from "react-router-dom";
import Login from "./views/Login";
import AdminLogin from "./views/AdminLogin";

const authRoutes: RouteObject[] = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "fp-login",
    element: <AdminLogin />,
  },
];

export default authRoutes;
