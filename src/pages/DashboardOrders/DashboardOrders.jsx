import DataTable, { createTheme } from "react-data-table-component";
import Delete from "../../assets/svg/Delete";
import Loading from "../../component/Loading";
import useFetchData from "./../../Helper/DataFetch";
import { useContext } from "react";
import { UserContext } from "./../../context/UserContext";
import { DeleteAlert } from "../../Helper/DeleteAlert";
import { Helmet } from "react-helmet";

const DashboardOrders = () => {
  const { user } = useContext(UserContext);
  const { isFetching, error, data, refetch } = useFetchData(
    `${import.meta.env.VITE_HOST}/orders?email=${user.email}`,
    ["orders"]
  );
  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <img
          className="w-20 h-20 p-2 object-cover rounded-xl"
          src={row?.image}
        />
      ),
    },
    {
      name: "Product Title",
      selector: (row) => (
        <span className="text-sm text-textColor">{row?.name?.length > 30 ? row?.name.slice(0, 30)+ "...": row?.name}</span>
      ),
    },
    {
      name: "Payment",
      selector: (row) => <span className="text-green-500">PAID</span>,
    },
    {
      name: "Order ID",
      selector: (row) => <span className="text-blue-500">{row?._id}</span>,
    },
    {
      name: "action",
      selector: (row) => (
        <div>
          <button
            onClick={() =>
              DeleteAlert(
                `${import.meta.env.VITE_HOST}/orders/${row._id}`,
                refetch
              )
            }
          >
            <Delete />
          </button>
        </div>
      ),
    },
  ];

  if (isFetching) {
    return <Loading />;
  }
  return (
    <div>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Orders || Variety Store</title>
      </Helmet>
      <div className="">
        <DataTable
          columns={columns}
          data={data}
          title="My orders"
          progressComponent={<Loading />}
          theme="solarized"
        />
      </div>
    </div>
  );
};

export default DashboardOrders;
