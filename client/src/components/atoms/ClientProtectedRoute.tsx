import { Navigate, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import clientAuthState from "src/recoil/clientAuth";

export const ClientProtectedRoute = () => {
  const [auth] = useRecoilState(clientAuthState);

  if (!auth) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet />;
};
