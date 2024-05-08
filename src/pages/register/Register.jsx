import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PasswordValidation from "./PasswordValidation";
import GoogleAndGithub from "../../component/GoogleAndGithub";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import toast from "react-hot-toast";
import { Button, Modal } from "flowbite-react";
import { Helmet } from 'react-helmet';

const Register = () => {
  const { createUser, updateUserName, user } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(true);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("buyer");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const [validation, setValidation] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
    minLength: false,
  });

  const handleOnChange = (password) => {
    let lowercase,
      upppercase,
      number,
      specialChar,
      minLength = false;
    if (/(?=.*[0-9])/.test(password)) {
      number = true;
    }
    if (/(?=.*[a-z])/.test(password)) {
      lowercase = true;
    }
    if (/(?=.*[A-Z])/.test(password)) {
      upppercase = true;
    }
    if (/(?=.*\W)/.test(password)) {
      specialChar = true;
    }
    if (password.length >= 6) {
      minLength = true;
    }
    setValidation({
      lowercase: lowercase,
      uppercase: upppercase,
      number: number,
      specialChar: specialChar,
      minLength: minLength,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (
      validation.lowercase &&
      validation.uppercase &&
      validation.number &&
      validation.specialChar &&
      validation.minLength
    ) {
      createUser(email, password)
        .then(async (data) => {
          if (data) {
            updateUserName(username);
            const res = await fetch(`${import.meta.env.VITE_HOST}/users`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: username,
                profile: data.user.photoURL,
                email: data.user.email,
                verify: false,
                role: role,
              }),
            });
            toast.success("Register successfull.");
            e.target.reset();
            navigate(from, { replace: true });
          }
        })
        .catch((err) => setError(err.message));
    } else {
      toast.error("Password is too weak.");
    }
  };
  return (
    <div className="mx-auto w-full">
            <Helmet>
        <meta charSet="utf-8" />
        <title>Register || Variety Store</title>
      </Helmet>
      <div className="grid md:grid-cols-2 gap-5">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full">
            <div className="mb-2 block">
              <Label
                className="text-textColor"
                htmlFor="full-name"
                value="Write your username"
              />
            </div>
            <TextInput
              id="full-name"
              type="text"
              icon={HiPencil}
              placeholder="Put your full-name"
              required
              className="custom-input"
              name="username"
            />
          </div>
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
                value="Write Password"
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
              onChange={(e) => handleOnChange(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <Link
              to="/login"
              className="text-sm text-textColor underline mt-5 hover:text-blue-500"
            >
              Already have an accouct, , Please Login
            </Link>
            <p className="text-red-500 mt-2">{error}</p>
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 mt-5 w-1/3"
            >
              Submit
            </button>
          </div>
        </form>
        {/* Password Validation  */}
        <PasswordValidation validation={validation} />
      </div>
      <GoogleAndGithub setError={setError} role={role} />
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body className="bg-cardBg">
          <h1 className="text-2xl text-textColor">Are you Seller?</h1>
        </Modal.Body>
        <Modal.Footer className="bg-cardBg">
          <Button color="failure" onClick={() => setOpenModal(false)}>
            NO
          </Button>
          <Button
            color="success"
            onClick={() => {
              setRole("seller");
              setOpenModal(false);
            }}
          >
            YES
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Register;
