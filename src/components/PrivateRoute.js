import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () =>
  localStorage.getItem("isAuth") === "yes" ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" replace />
  );

export default PrivateRoute;
