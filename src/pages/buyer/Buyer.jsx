

import DataTable, { createTheme } from "react-data-table-component";
import Delete from "../../assets/svg/Delete";
import useFetchData from "./../../Helper/DataFetch";
import { toast } from "react-hot-toast";
import { DeleteAlert } from "../../Helper/DeleteAlert";
import Loading from "../../component/Loading";
import { Helmet } from 'react-helmet';
createTheme(
  "solarized",
  {
    text: {
      primary: "#eeeeee",
      secondary: "#2aa198",
    },
    background: {
      default: "#393E46",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    button: {
      default: "#2aa198",
      hover: "rgba(0,0,0,.08)",
      focus: "rgba(255,255,255,.12)",
      disabled: "rgba(255, 255, 255, .34)",
    },
    sortFocus: {
      default: "#2aa198",
    },
  },
  "dark"
);
const Buyer = () => {
  const { isFetching, error, data, refetch } = useFetchData(
    `${import.meta.env.VITE_HOST}/buyers`,
    ["buyers"]
  );

  const columns = [
    {
      name: "Buyers Name",
      selector: (row) => (
        <span className="text-sm text-textColor">{row?.name}</span>
      ),
    },
    {
      name: "buyers Email",
      selector: (row) => (
        <span className="text-sm text-textColor">{row?.email}</span>
      ),
    },
    {
      name: "action",
      selector: (row) => (
        <div>
          <button
            onClick={() => {
              DeleteAlert(
                `${import.meta.env.VITE_HOST}/users/${row._id}`,
                refetch
              );
            }}
          >
            <Delete />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Buyer || Variety Store</title>
      </Helmet>
      <div>
        <DataTable
          columns={columns}
          data={data}
          title="All buyers"
          progressComponent={<Loading />}
          theme="solarized"
        />
      </div>
    </div>
  );
};

export default Buyer;
