import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AuthTemplate from "./modules/auth/components/templates/AuthTemplate";
import adminRoutes from "./modules/admin/router";
import authRoutes from "./modules/auth/router";
import clientRoutes from "./modules/clients/router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [...clientRoutes],
  },
  {
    path: "/auth",
    element: <AuthTemplate />,
    children: [...authRoutes],
  },
  {
    path: "/admin",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [...adminRoutes],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
