import google from "../assets/images/google.png";
import github from "../assets/images/github.png";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const GoogleAndGithub = ({setError,role}) => {
  const { githubLogin, googleLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleSignIn = () => {
    googleLogin().then(async (result) => {
      if (result) {
        const res = await fetch(`${import.meta.env.VITE_HOST}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: result.user.displaName,
            profile: result.user.photoURL,
            email: result.user.email,
            verify: false,
            role: "buyer",
          }),
        });
        toast.success("Login Successfull.");
        e.target.reset();
        navigate(from, { replace: true });
      }
    })
    .catch((err) => setError(err.message));
  };
  const githubSignIn = () => {
    githubLogin().then(async (result) => {
      if (result) {
        const res = await fetch(`${import.meta.env.VITE_HOST}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: result.user.displaName,
            profile: result.user.photoURL,
            email: result.user.email,
            verify: false,
            role: role,
          }),
        });
        toast.success("Login Successfull.");
        e.target.reset();
        navigate(from, { replace: true });
      }
    })
    .catch((err) => setError(err.message));
  };
  return (
    <div>
      <div className="flex gap-3 justify-center items-center mt-5">
        <span className="h-1 rounded-lg bg-themeColor w-full"></span>
        <span className="text-lg text-textColor">OR</span>
        <span className="h-1 rounded-lg bg-themeColor w-full"></span>
      </div>
      <div className="flex gap-3 mx-auto w-full justify-center items-center">
        <img
          onClick={googleSignIn}
          className="w-12 cursor-pointer"
          src={google}
          alt=""
        />
        <img
          onClick={githubSignIn}
          className="w-12 cursor-pointer"
          src={github}
          alt=""
        />
      </div>
    </div>
  );
};

export default GoogleAndGithub;
