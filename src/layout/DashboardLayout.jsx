import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import dashboard from "../assets/images/dashboard.png";
import buyer from "../assets/images/buyer.png";
import products from "../assets/images/products.png";
import seller from "../assets/images/seller.png";
import order from "../assets/images/order.png";
import Loading from "../component/Loading";
import { UserContext } from "./../context/UserContext";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(null);
  const { user } = useContext(UserContext);
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_HOST}/chack-role?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRole(data.role);
        setLoading(false);
      });
  }, [user]);
  const dashboardNavbar = [
    {
      id: 1,
      name: "Dashboard",
      href: "/dashboard",
      img: dashboard,
      isShow: false,
    },
    {
      id: 2,
      name: "Buyer",
      href: "/dashboard/buyer",
      img: buyer,
      isShow: true,
    },
    {
      id: 3,
      name: "Products",
      href: "/dashboard",
      img: products,
      isShow: true,
    },
    {
      id: 4,
      name: "Orders",
      href: "/orders",
      img: order,
      isShow: true,
    },
  ];
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <Drawer
        className="bg-cardBg text-textColor"
        open={isOpen}
        // onClose={handleClose}
      >
        <Drawer.Header title="Dashboard" />
        {loading ? (
          <Loading />
        ) : (
          <Drawer.Items>
            {dashboardNavbar?.map((item) => {
              item.isShow && (
                <Link
                  to={item?.href}
                  className="flex gap-4 hover:bg-black p-2 rounded-lg delay-75"
                  key={item.id}
                >
                  <span>
                    <img className="w-6 h-6" src={item?.img} alt="" />
                  </span>
                  <span className="text-lg">{item?.name}</span>
                </Link>
              );
            })}
          </Drawer.Items>
        )}
      </Drawer>
    </div>
  );
};

export default DashboardLayout;
