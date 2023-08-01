import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import "./ArticleItem.css";

const ArticleItem = ({ article }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClicked = () => {
    setIsLiked(!isLiked);
  };

  if (!article) {
    return null;
  }

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
