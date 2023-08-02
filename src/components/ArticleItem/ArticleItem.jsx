import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import "./ArticleItem.css";

const ArticleItem = ({ article, isLiked, handleLikeClicked }) => {
  return (
    <div className="article">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-content">{article.content}</p>
      <button
        className="like__button"
        onClick={() => handleLikeClicked(article)}
      >
        {isLiked ? <BsFillHeartFill color="red" /> : <BsFillHeartFill />}
      </button>
    </div>
  );
};

export default ArticleItem;
