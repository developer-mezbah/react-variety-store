import { Player } from "@lottiefiles/react-lottie-player";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[500px]">
      <Player
        autoplay
        loop
        src="/loading.json"
        style={{ height: "250px", width: "250px" }}
      ></Player>
    </div>
  );
};

export default Loading;
