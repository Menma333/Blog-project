import React from "react";
import "../InfoBlock/InfoBlock.css";
import { FaAngular, FaVuejs, FaReact } from "react-icons/fa";

const InfoBlock = () => {
  return (
    <div className="container">
      <button className="info__button">
        <FaReact /> React
      </button>
      <button className="info__button">
        <FaAngular /> Angular
      </button>
      <button className="info__button">
        <FaVuejs />
        Vue.JS
      </button>
    </div>
  );
};

export default InfoBlock;
