import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

export const AdminProtectedRoute = ({ element: Element, ...rest }) => {
  const { user } = useContext(AuthContext);
  return user ? <Element {...rest} /> : <Navigate to="/login" replace={true} />;
};

export const AuthProtectedRoute = ({ element: Element, ...rest }) => {
  const { user } = useContext(AuthContext);
  return user ? (
    <Navigate to="/admin/panel" replace={true} />
  ) : (
    <Element {...rest} />
  );
};
