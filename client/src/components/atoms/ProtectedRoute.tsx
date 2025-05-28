import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "src/providers/UserProvider";
import Spinner from "./Spinner";

export const ProtectedRoute = () => {
  const { isReady, isLoading } = useUser();

  if (isLoading) {
    return <Spinner />;
  }

  if (!isReady) {
    return <Navigate to="/auth/fp-login" />;
  }

  return <Outlet />;
};
