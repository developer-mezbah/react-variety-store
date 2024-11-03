import React from "react";
import { useContext } from "react";
import { UserContext } from "./../../context/UserContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../component/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
