import React from "react";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./../../context/UserContext";
import Loading from "../../component/Loading";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const SellerRoute = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [roleLoading, setRoleLoading] = useState(true);
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOST}/chack-role?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setUserData(data);
          setRoleLoading(false);
        }
      });
  }, [user]);

  if (loading || roleLoading) {
    return <Loading />;
  }
  if (userData.role === "seller" && userData.verify === true) {
    return children;
  } else if (userData.role === "admin") {
    return children;
  } else {
    return (
      <h1 className="text-4xl text-textColor">
        You're <span className="text-red-500">not verified</span>. Please
        Contact This Email:-
        <span className="text-themeColor">developer.mezbah@gmail.com</span>
      </h1>
    );
  }
};

export default SellerRoute;
