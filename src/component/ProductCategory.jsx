import React, { useEffect, useState } from "react";
import ReuseableTitle from "./ReuseableTitle";
// import { categories } from "../../public/fakeData";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_HOST}/category`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <ReuseableTitle text={"Product by Category"} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
        {!loading ? categories?.map((item) => (
          <Link
            to={`/category/${item?._id}`}
            className="px-2 py-3 bg-cardBg rounded-md group overflow-hidden"
            key={item._id}
          >
            <div className="h-[300px] w-full overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-125 duration-75 -z-10"
                src={item?.img}
                alt={item?.name}
              />
            </div>
            <h3 className="text-xl text-themeColor font-semibold pt-2 z-10">{item?.name}</h3>
          </Link>
        )): <Loading/>}
      </div>
    </div>
  );
};

export default ProductCategory;
