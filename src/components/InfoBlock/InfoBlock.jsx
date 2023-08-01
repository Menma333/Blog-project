import React from "react";
import "../InfoBlock/InfoBlock.css";

const InfoBlock = ({ items, onOpenShowFullItem }) => {
  return (
    <div className="container">
      {items.map((item) => (
        <button
          key={item.title}
          className="info__button"
          onClick={() => onOpenShowFullItem(item.info, item.title, item.icon)}
        >
          {item.icon} {item.title}
        </button>
      ))}
    </div>
  );
};

export default InfoBlock;
