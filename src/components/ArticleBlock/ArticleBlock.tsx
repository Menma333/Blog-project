import React from "react";
import "../ArticleBlock/ArticleBlock.css";
import { FaHeart } from "react-icons/fa";

const ArticleBlock = ({ articles, technologyTitles }) => {
  return (
    <div className="container">
      {technologyTitles.map((title) => (
        <button className="title__articles__button" key={title}>
          <h2>{title}</h2>
          <div className="article-block-container">
            {articles
              .filter((article) =>
                article.title.toLowerCase().includes(title.toLowerCase())
              )
              .map((article) => (
                <div key={article.id} className="article">
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-content">{article.content}</p>
                  <button className="like__button">
                    <FaHeart />
                  </button>
                </div>
              ))}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ArticleBlock;
