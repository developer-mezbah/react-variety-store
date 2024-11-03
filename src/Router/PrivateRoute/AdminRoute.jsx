import React from "react";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./../../context/UserContext";
import Loading from "../../component/Loading";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const AdminRoute = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [roleLoading, setRoleLoading] = useState(true);
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOST}/chack-role?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.role);
        setRoleLoading(false);
      });
  }, [user]);
  if (loading || roleLoading) {
    return <Loading />;
  }
  if (userData === "admin") {
    return children;
  } else {
    <h1>You're not a admin.</h1>;
  }
};

export default AdminRoute;
