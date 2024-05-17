import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Blogs from "../../pages/blogs/Blogs";
import Category from "../../pages/category/Category";
import Register from "../../pages/register/Register";
import Login from "../../pages/login/Login";
import NotFoundPage from "../../component/NotFoundPage";
import DashboadLayout from "../../layout/DashboadLayout";
import Dashboard from "../../component/Dashboard";
import Buyer from "../../pages/buyer/Buyer";
import DashboardProducts from "../../pages/DasboardProducts/DashboardProducts";
import DashboardOrders from "../../pages/DashboardOrders/DashboardOrders";
import DashboardSeller from "../../pages/DashboardSeller/DashboardSeller";
import DashboardAddProduct from "../../pages/DashboardAddProduct/DashboardAddProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllProducts from "../../component/AllProducts";
import AdminRoute from "../PrivateRoute/AdminRoute";
import SellerRoute from "../PrivateRoute/SellerRoute";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import PaymentSuccess from "../../component/PaymentSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return await fetch(`${import.meta.env.VITE_HOST}/products`);
        },
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/category/:id",
        element: <PrivateRoute><Category /></PrivateRoute>,
        loader: async ({params}) => {
          return await fetch(`${import.meta.env.VITE_HOST}/category/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products",
        element: <AllProducts />,
        loader: async () => {
          return await fetch(`${import.meta.env.VITE_HOST}/products`);
        },
      },
      {
        path: "/product-details/:id",
        element: <PrivateRoute><ProductDetails/></PrivateRoute>,
        loader: async ({params}) => {
          return await fetch(`${import.meta.env.VITE_HOST}/single-product/${params.id}`);
        },
      },
      {
        path: "/sucess",
        element: <PaymentSuccess/>
      },
      {
        path: "*",
        element: <NotFoundPage/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboadLayout/></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/dashboard/buyer",
        element: <AdminRoute><Buyer/></AdminRoute>
      },
      {
        path: "/dashboard/orders",
        element: <DashboardOrders/>
      },
      {
        path: "/dashboard/my-products",
        element: <SellerRoute><DashboardProducts/></SellerRoute>
      },
      {
        path: "/dashboard/sellers",
        element: <AdminRoute><DashboardSeller/></AdminRoute>
      },
      {
        path: "/dashboard/add-product",
        element: <SellerRoute> <DashboardAddProduct/></SellerRoute>
      },
    ]
  }
]);
export default router;
