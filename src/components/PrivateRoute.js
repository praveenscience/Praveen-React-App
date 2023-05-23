import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ User }) =>
  typeof User === "object" ? <Outlet /> : <Navigate to="/Login" replace />;

export default PrivateRoute;
