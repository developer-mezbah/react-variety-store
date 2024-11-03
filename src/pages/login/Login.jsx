import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import google from "../../assets/images/google.png";
import github from "../../assets/images/github.png";
import GoogleAndGithub from "../../component/GoogleAndGithub";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const [error, setError] = useState(false);
  const { logIn, user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;
  console.log(from);
  
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then((result) => {
        if (result) {
          toast.success("Login Successfull.");
          e.target.reset();
          navigate(from, { replace: true });
        }
      })
      .catch((err) => setError(err.message));
  };
  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login || Variety Store</title>
      </Helmet>
      <div className="mx-auto md:w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <div className="mb-2 block">
              <Label
                className="text-textColor"
                htmlFor="email"
                value="Your email"
              />
            </div>
            <TextInput
              id="email"
              type="email"
              icon={HiMail}
              placeholder="Put your email address"
              required
              className="custom-input"
              name="email"
            />
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label
                className="text-textColor"
                htmlFor="password"
                value="Your email"
              />
            </div>
            <TextInput
              id="password"
              type="password"
              icon={HiLockClosed}
              placeholder="Write password"
              required
              className="custom-input"
              name="password"
            />
          </div>
          <div className="flex flex-col">
            <Link
              to="/register"
              className="text-sm text-textColor underline mt-5 hover:text-blue-500"
            >
              Don't Have any accouct, , Please create a accouct
            </Link>
            <p className="text-red-500">{error}</p>
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 mt-5 w-1/3"
            >
              Submit
            </button>
          </div>
        </form>
        <GoogleAndGithub setError={setError} />
      </div>
    </>
  );
};

export default Login;
