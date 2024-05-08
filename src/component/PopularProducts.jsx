import React from "react";
import ReuseableTitle from "./ReuseableTitle";
import { SinglePrduct } from "./SingleProduct";
import Loading from "./Loading";

const PopularProducts = ({ data }) => {
  return (
    <div className="mt-16">
      <ReuseableTitle text={"Popular items this season"} />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-14">
        {data ? (
          data
            ?.slice(0, 6)
            .map((item, index) => <SinglePrduct key={index} data={item} />)
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
