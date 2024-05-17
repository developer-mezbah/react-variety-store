import DataTable, { createTheme } from "react-data-table-component";
import Delete from "../../assets/svg/Delete";
import Loading from "../../component/Loading";
import { useEffect } from "react";
import useFetchData from "../../Helper/DataFetch";
import { useContext, useState } from "react";
import { UserContext } from "./../../context/UserContext";
import EditIcon from "../../assets/svg/EditIcon";
import DashboardAddProduct from "../DashboardAddProduct/DashboardAddProduct";
import { DeleteAlert } from "../../Helper/DeleteAlert";
import { Helmet } from "react-helmet";

const DashboardProducts = () => {
  const { user } = useContext(UserContext);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({});

  const { isFetching, error, data, refetch } = useFetchData(
    `${import.meta.env.VITE_HOST}/my-products?email=${user.email}`,
    ["my-products"]
  );

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <img className="w-20 h-20 p-2 object-cover rounded-xl" src={row?.img} />
      ),
    },
    {
      name: "Title",
      selector: (row) => (
        <p className="text-lg text-textColor truncate">
          {row?.name.slice(0, 30)}
        </p>
      ),
    },
    {
      name: "price",
      selector: (row) => (
        <span className="text-lg text-textColor">${row?.price}</span>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => {
              DeleteAlert(
                `${import.meta.env.VITE_HOST}/products/${row?._id}`,
                refetch
              );
            }}
          >
            <Delete />
          </button>
          <button
            className="text-themeColor"
            onClick={() => {
              const clicktedData = data.filter((item) => item._id === row._id);
              setUpdateFormData(clicktedData[0]);
              setShowUpdateForm(true);
            }}
          >
            <EditIcon />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My-Products || Variety Store</title>
      </Helmet>
      {!showUpdateForm ? (
        <DataTable
          columns={columns}
          data={data}
          title="Products"
          pagination
          progressComponent={<Loading />}
          theme="solarized"
        />
      ) : (
        <DashboardAddProduct
          updateFormData={updateFormData}
          refetch={refetch}
          setShowUpdateForm={setShowUpdateForm}
        />
      )}
    </div>
  );
};

export default DashboardProducts;
