import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import avatar from "../assets/images/avatar.jpg";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { user, logOut } = useContext(UserContext);
  const handleSignOut = () => {
    logOut().then((result) => console.log(result));
  };
  return (
    <div className="header">
      <Navbar fluid rounded>
        <Link to="/" className="w-2/3 md:w-[250px] lg:w-[350px]">
          <img
            src={logo}
            className="md:mr-3 h-20 w-full"
            alt="ecommerce Logo"
          />
        </Link>
        <div className="flex md:order-2 navbar-dropdown">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={user?.photoURL || avatar}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item className="group">
              <Link to="/dashboard" className="group-hover:text-themeColor dashboard-nav">
                Dashboard
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link
            className={`${
              location.pathname === "/" ? "active" : ""
            } p-2 text-textColor hover:text-themeColor duration-75`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`${
              location.pathname === "/products" ? "active" : ""
            } p-2 text-textColor hover:text-themeColor duration-75`}
            to="/products"
          >
            Products
          </Link>
          <Link
            className={`${
              location.pathname === "/blogs" ? "active" : ""
            } p-2 text-textColor hover:text-themeColor duration-75`}
            to="/blogs"
          >
            Blogs
          </Link>
          {!user && (
            <Link
              className={`${
                location.pathname === "/login" ? "active" : ""
              } p-2 text-textColor hover:text-themeColor duration-75`}
              to="/login"
            >
              Login
            </Link>
          )}
          {!user && (
            <Link
              className={`${
                location.pathname === "/register" ? "active" : ""
              } p-2 text-textColor hover:text-themeColor duration-75`}
              to="/register"
            >
              Register
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
