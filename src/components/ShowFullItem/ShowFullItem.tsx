import React from "react";
import "../ShowFullItem/ShowFullItem.css";
import { FaAngular, FaVuejs, FaReact } from "react-icons/fa";

const ShowFullItem = ({ isOpen, onClose, title, info, icon }) => {
  if (!isOpen) return null;
  return (
    <div className="ShowFullItem__overlay">
      <div className="ShowFullItem__content">
        <h3>
          {icon} {title}
        </h3>
        <p>{info}</p>
        <button className="ShowFullItem__button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ShowFullItem;
