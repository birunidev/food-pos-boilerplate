import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import adminRoutes from "./modules/admin/router";
import authRoutes from "./modules/auth/router";
import clientRoutes from "./modules/clients/router";
import { ProtectedRoute } from "./components/atoms/ProtectedRoute";
import { RestrictedRoute } from "./components/atoms/RestrictedRoute";

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
    element: <RestrictedRoute />,
    children: [...authRoutes],
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [...adminRoutes],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
