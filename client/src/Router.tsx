import { createBrowserRouter, RouterProvider } from "react-router-dom";
import adminRoutes from "./modules/admin/router";
import authRoutes from "./modules/auth/router";
import clientRoutes from "./modules/clients/router";
import { ProtectedRoute } from "./components/atoms/ProtectedRoute";
import { RestrictedRoute } from "./components/atoms/RestrictedRoute";
import { ClientProtectedRoute } from "./components/atoms/ClientProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientProtectedRoute />,
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
