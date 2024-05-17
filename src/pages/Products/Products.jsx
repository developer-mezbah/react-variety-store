import DataTable from "react-data-table-component";
import { Helmet } from "react-helmet";
import Loading from "../../component/Loading";
const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

const Products = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <DataTable
        columns={columns}
        data={data}
        pagination
        progressComponent={<Loading/>}
        theme="solarized"
      />
    </>
  );
};

export default Products;
