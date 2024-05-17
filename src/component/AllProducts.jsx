import React from "react";
import ReuseableTitle from "./ReuseableTitle";
import { useLoaderData } from "react-router-dom";
import { SinglePrduct } from "./SingleProduct";
import Loading from "./Loading";
import { Helmet } from "react-helmet";

const AllProducts = () => {
  const products = useLoaderData();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Products || Variety Store</title>
      </Helmet>
      <ReuseableTitle text="All-products" />
      {products ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-14">
          {products?.map((item, index) => (
            <SinglePrduct data={item} key={item._id} index={index}/>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default AllProducts;
