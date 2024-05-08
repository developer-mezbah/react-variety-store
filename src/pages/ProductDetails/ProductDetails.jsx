import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import bgImg from "../../assets/images/ecommerce-2140604_1280.jpg";
import Payment from "../../component/Payment";
import ReuseableTitle from "../../component/ReuseableTitle";
import { SinglePrduct } from "../../component/SingleProduct";
import { Helmet } from 'react-helmet';

const ProductDetails = () => {
  const { product, relatedProducts } = useLoaderData();
  const filterRelatedProducts = relatedProducts.filter(
    (item) => item._id !== product._id
  );
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
            <Helmet>
        <meta charSet="utf-8" />
        <title>Product Details || Variety Store</title>
      </Helmet>
      <div
        className="flex justify-between items-center py-20 px-5"
        style={{
          background: `url(${bgImg}) no-repeat center center`,
          backgroundSize: "cover",
          backgroundColor: "#0003",
          backgroundBlendMode: "multiply",
        }}
      >
        <h1 className="text-4xl text-themeColor font-bold underline">
          Product Details
        </h1>
        <button className="bg-themeColor text-textColor p-5 rounded-xl">
          Home/ Product Details
        </button>
      </div>
      <div className="grid grid-cols-2 gap-5 py-5 mt-10">
        <div>
          <img
            className="rounded-xl h-[500px] object-scale-down w-full"
            src={product?.img}
            alt={product?.name}
          />
        </div>
        <div>
          <h2 className="text-textColor text-2xl">{product?.name}</h2>
          <div className="mt-5 flex items-center gap-1">
            <span className="text-themeColor text-4xl">${product?.price * quantity}</span>
            <small className="text-textColor"> - ${product?.price * 1.5 * quantity}</small>
          </div>
          <div className="mb-5 mt-2.5 flex items-center">
            <svg
              className="h-5 w-5 text-themeColor"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-themeColor"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-themeColor"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              {product?.ratings || 0}
            </span>
          </div>
          <p className="text-textColor">{product?.description}</p>
          <div className="flex gap-5 justify-between mt-5 items-center">
            <div className="quantity flex gap-5 text-2xl mt-5 items-center">
              <button
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
                className="bg-themeColor p-2 rounded-lg flex justify-center items-center text-white h-10 w-10 hover:bg-orange-500"
              >
                <span className="-mt-1 font-bold">-</span>
              </button>
              <span className="text-textColor">{quantity}</span>
              <button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                className="bg-themeColor p-2 rounded-lg flex justify-center items-center text-white h-10 w-10 hover:bg-orange-500"
              >
                <span className="-mt-1 font-bold">+</span>
              </button>
            </div>
            {/* Payment button  */}
            <Payment product={{...product, quantity: quantity}}/>
          </div>
        </div>
      </div>
      <div className="releted-products">
        <ReuseableTitle text={"Related Products"} />
        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-14">
          {filterRelatedProducts.length === 0 ? (
            <h1 className="text-red-500">There is no related Products.</h1>
          ) : (
            filterRelatedProducts?.map((item) => <SinglePrduct data={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
