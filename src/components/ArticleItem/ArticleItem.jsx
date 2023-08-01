import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import "./ArticleItem.css";

const ArticleItem = ({ article, handleLikeClicked }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="article">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-content">{article.content}</p>
      <button className="like__button" onClick={handleLikeClicked}>
        {isLiked ? <BsFillHeartFill color="red" /> : <BsFillHeartFill />}
      </button>
    </div>
  );
};

export default ArticleItem;
