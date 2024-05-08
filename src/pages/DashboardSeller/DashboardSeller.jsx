import DataTable, { createTheme } from "react-data-table-component";
import Delete from "../../assets/svg/Delete";
import useFetchData from "./../../Helper/DataFetch";
import { toast } from "react-hot-toast";
import { DeleteAlert } from "../../Helper/DeleteAlert";
import Loading from "../../component/Loading";
import { Helmet } from "react-helmet";

const DashboardSeller = () => {
  const { isFetching, error, data, refetch } = useFetchData(
    `${import.meta.env.VITE_HOST}/sellers`,
    ["sellers"]
  );
  const handleVerify = async (selectedSeller) => {
    const res = await (
      await fetch(
        `${import.meta.env.VITE_HOST}/seller-verify?email=${
          selectedSeller.email
        }&verify=${!selectedSeller.verify}`
      )
    ).json();
    if (res.verify === true) {
      refetch();
      toast.success("seller verified.");
    } else {
      refetch();
      toast.success("seller unverified successfull.");
    }
  };
  const columns = [
    {
      name: "Seller Name",
      selector: (row) => (
        <span className="text-sm text-textColor">{row?.name}</span>
      ),
    },
    {
      name: "Seller Email",
      selector: (row) => (
        <span className="text-sm text-textColor">{row?.email}</span>
      ),
    },
    {
      name: "Verify",
      selector: (row) =>
        row?.verify ? (
          <div className="flex gap-2 items-center">
            <label htmlFor="verify">Click Here</label>
            <input
              id="verify"
              className="rounded-xl"
              type="checkbox"
              defaultChecked
              onClick={() => handleVerify(row)}
            />
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <label htmlFor="verify">Click Here</label>
            <input
              id="verify"
              className="rounded-xl"
              type="checkbox"
              onClick={() => handleVerify(row)}
            />
          </div>
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

  if (isFetching) {
    return <Loading />;
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sellers || Variety Store</title>
      </Helmet>
      <div>
        <DataTable
          columns={columns}
          data={data}
          title="All sellers"
          progressComponent={<h1>Loading...</h1>}
          theme="solarized"
        />
      </div>
    </div>
  );
};

export default DashboardSeller;
