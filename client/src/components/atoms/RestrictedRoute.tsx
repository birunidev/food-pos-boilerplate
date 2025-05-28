import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "src/providers/UserProvider";
import Spinner from "./Spinner";

export const RestrictedRoute = () => {
  const { isReady, isLoading } = useUser();

  if (isLoading) {
    return <Spinner />;
  }

  if (isReady) {
    return <Navigate to="/admin" />;
  }

  return <Outlet />;
};
