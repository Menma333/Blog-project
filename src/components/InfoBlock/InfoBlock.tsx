import React from "react";
import { FaAngular, FaVuejs, FaReact } from "react-icons/fa";
import "../InfoBlock/InfoBlock.css";

const InfoBlock = ({ onOpenShowFullItem }) => {
  return (
    <div className="container">
      <button
        className="info__button"
        onClick={() => onOpenShowFullItem("React")}
      >
        <FaReact /> React
      </button>
      <button
        className="info__button"
        onClick={() => onOpenShowFullItem("Angular")}
      >
        <FaAngular /> Angular
      </button>
      <button
        className="info__button"
        onClick={() => onOpenShowFullItem("Vue")}
      >
        <FaVuejs /> Vue.JS
      </button>
    </div>
  );
};

export default InfoBlock;
