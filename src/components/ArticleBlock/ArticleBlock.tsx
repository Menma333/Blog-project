import React from "react";
import "../ArticleBlock/ArticleBlock.css";
import { FaHeart } from "react-icons/fa";

const ArticleBlock = ({ articles }) => {
  return (
    <div className="container">
      <div className="article-block-container">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-content">{article.content}</p>
            <button className="read-more-button">
              <FaHeart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleBlock;
