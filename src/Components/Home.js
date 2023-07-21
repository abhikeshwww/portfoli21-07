import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Head from "./Head";
const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Abhikesh",
      "FrontEnd Developer",
      "Bilingual Engineer",
      "JLPT N2 Certified",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <div>
      <Head></Head>
      <div className="flex  flex-col max-w-full h-90v items-center   justify-center">
        <div className="w-1/3 items-center justify-center">
          <video
            loading="lazy"
            muted="muted"
            src="https://cdnl.iconscout.com/lottie/premium/thumb/welcome-8105671-6477982.mp4"
            type="video/mp4"
            autoplay="autoplay"
            loop="loop"
          ></video>
        </div>

        <span className="text-7xl font-bold">
          Hi ! I Am {text}
          <Cursor />
        </span>
        <span className="text-xl m-4">Living in Yokohama, Japan</span>
        <button className="border m-1 p-2 hover:scale-110 duration-75 rounded-full px-3 border-orange-400 hover:border-2 hover:bg-orange-300 hover:border-orange-600 ">
          About Me
        </button>
        <a href="/">
          <FontAwesomeIcon
            icon={faCaretDown}
            bounce
            className="absolute bottom-0 pb-7"
          />
        </a>
      </div>
    </div>
  );
};
export default Home;
