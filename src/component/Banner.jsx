import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Banner = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-5 items-center">
        <div className="text-textColor md:space-y-8 space-y-5">
          <p>Hi, there!</p>
          <h1 className="uppercase md:text-6xl text-4xl">
            <span className="text-themeColor space-x-2">Variety Store</span> Is
            here to be your store.
          </h1>
          <p>
            I am here ready to help you in making creative digital products.
          </p>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 flex items-center justify-center gap-1"
          >
            <svg
              className="w-3.5 h-3.5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Buy now
          </button>
        </div>
        <div>
          <Player
            autoplay
            loop
            src="/product.json"
            style={{ height: "100%", width: "100%" }}
          ></Player>
        </div>
      </div>
    </>
  );
};

export default Banner;
