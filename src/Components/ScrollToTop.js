import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
const ScrollToTop = () => {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <button onClick={scroll} className=" text-red-400">
      <FontAwesomeIcon className="text-2xl" icon={faCircleChevronUp} />
    </button>
  );
};

export default ScrollToTop;
