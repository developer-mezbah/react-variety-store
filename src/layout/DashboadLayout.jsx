import { Button, Drawer } from "flowbite-react";
import { useState, useContext, useEffect, useLayoutEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import dashboard from "../assets/images/dashboard.png";
import buyer from "../assets/images/buyer.png";
import products from "../assets/images/products.png";
import seller from "../assets/images/seller.png";
import order from "../assets/images/order.png";
import addProduct from "../assets/images/add-product.png";
import { useLocation } from "react-router-dom";
import { UserContext } from "./../context/UserContext";
import Loading from "../component/Loading";

const DashboadLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(null);
  const { user } = useContext(UserContext);
  const [drawerPosition, setDrawerPosition] = useState(0);
  const [size, setSize] = useState([0, 0]);

  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_HOST}/chack-role?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRole(data.role);
        setLoading(false);
      });
  }, [user]);
  useLayoutEffect(() => {
    var div = document.getElementById("drawer");
    var rightPosition = div.getBoundingClientRect();
    setDrawerPosition(Math.ceil(rightPosition.right));

    const updateWidthAndHeight = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, [size]);

  const dashboardNavbar = [
    {
      id: 1,
      name: "Dashboard",
      href: "/dashboard",
      img: dashboard,
      isShow: true,
    },
    {
      id: 6,
      name: "Add Product",
      href: "/dashboard/add-product",
      img: addProduct,
      isShow: role === "admin" || role === "seller" ? true : false,
    },
    {
      id: 3,
      name: "My Products",
      href: "/dashboard/my-products",
      img: products,
      isShow: role === "admin" || role === "seller" ? true : false,
    },
    {
      id: 4,
      name: "My Orders",
      href: "/dashboard/orders",
      img: order,
      isShow: true,
    },
    {
      id: 5,
      name: "All Sellers",
      href: "/dashboard/sellers",
      img: seller,
      isShow: role === "admin" ? true : false,
    },
    {
      id: 2,
      name: "Buyer",
      href: "/dashboard/buyer",
      img: buyer,
      isShow: role === "admin" ? true : false,
    },
  ];
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="drawar">
      <div
        className={`absolute md:p-10 pl-5 custom-outlet`}
        style={{
          left: drawerPosition+"px",
          width: `calc(100% - ${drawerPosition}px)`,
        }}
      >
        <Outlet />
      </div>
      <Drawer
        className="bg-cardBg text-textColor md:w-[15%] w-[80px] overflow-x-hidden"
        open={isOpen}
        id="drawer"
        // onClose={handleClose}
      >
        <Drawer.Header title="Dashboard" />
        <Drawer.Items>
          {dashboardNavbar?.map(
            (item) =>
              item.isShow && (
                <Link
                  to={item?.href}
                  className={`flex justify-center md:justify-start gap-4 hover:bg-black p-2 rounded-lg delay-75 mt-2 ${
                    location.pathname === item.href ? "bg-themeColor" : ""
                  }`}
                  key={item.id}
                >
                  <span>
                    <img className="w-6 h-6" src={item?.img} alt="" />
                  </span>
                  <span className="lg:text-lg text-sm md:block hidden">
                    {item?.name}
                  </span>
                </Link>
              )
          )}
          <Link
            className="lg:text-2xl text-xs underline hover:text-blue-600 whitespace-nowrap block md:mt-5 mt-3"
            to="/"
          >
            Go Home &#8594;
          </Link>
        </Drawer.Items>
      </Drawer>
    </div>
  );
};

export default DashboadLayout;
