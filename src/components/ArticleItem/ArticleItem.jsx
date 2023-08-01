import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import "./ArticleItem.css";

const ArticleItem = ({ article, handleLikeClicked }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeButtonClicked = () => {
    console.log(handleLikeClicked);
    handleLikeClicked(article);
    setIsLiked(!isLiked);
  };

  return (
    <div className="article">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-content">{article.content}</p>
      <button className="like__button" onClick={handleLikeButtonClicked}>
        {isLiked ? <BsFillHeartFill color="red" /> : <BsFillHeartFill />}
      </button>
    </div>
  );
};

export default ArticleItem;
