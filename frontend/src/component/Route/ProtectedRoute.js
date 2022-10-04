import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading === false) {
    if (isAdmin && user.role === "admin") {
      return children;
    }
    if (!isAdmin && isAuthenticated) {
      return children;
    }
  }
  return <Fragment>{loading === false && <Navigate to="/login" />}</Fragment>;
};

export default ProtectedRoute;
