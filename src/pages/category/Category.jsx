import React from "react";
import ReuseableTitle from "../../component/ReuseableTitle";
import { useLoaderData } from "react-router-dom";
import { SinglePrduct } from "../../component/SingleProduct";
import { Helmet } from "react-helmet";

const Category = () => {
  const products = useLoaderData();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Category || Variety Store</title>
      </Helmet>
      <ReuseableTitle text={`Products by Category "${products[0].category}"`} />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-14">
        {products?.map((item) => (
          <SinglePrduct key={item?._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
