import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = ({ User }) =>
  typeof User === "object" && User.Role === "Admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" replace />
  );

export default AdminRoute;
