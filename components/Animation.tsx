import Lottie from "react-lottie-player";
import lottie from "./../public/lottie.json";

const Animation = () => {
  return <Lottie loop animationData={lottie} play style={{ width: 150, height: 150 }} />;
};

export default Animation;
