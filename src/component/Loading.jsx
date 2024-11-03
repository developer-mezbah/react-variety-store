import { Player } from "@lottiefiles/react-lottie-player";

const Loading = () => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 m-auto bg-themeBg h-full w-full">
      <Player
        autoplay
        loop
        src="/loading.json"
        className="md:w-[250px] md:h-[250px] w-[150px]"
        // style={{ height: "250px", width: "250px" }}
      ></Player>
    </div>
  );
};

export default Loading;
