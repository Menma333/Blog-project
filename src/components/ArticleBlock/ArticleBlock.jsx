import React from "react";
import "../ArticleBlock/ArticleBlock.css";
import { Link } from "react-router-dom";
import ArticleItem from "../ArticleItem/ArticleItem";

const ArticleBlock = ({
  articles,
  technologyTitles,
  handleLikeClicked,
  isLiked,
}) => {
  return (
    <div className="container">
      {technologyTitles.map((title) => (
        <button className="title__articles__button" key={title}>
          <Link to={"category/" + title.toLowerCase()}>
            <h2>{title}</h2>
          </Link>
          <div className="article-block-container">
            {articles
              .filter((article) =>
                article.title.toLowerCase().includes(title.toLowerCase())
              )
              .map(
                (article) =>
                  article && (
                    <ArticleItem
                      key={articles.id}
                      article={article}
                      handleLikeClicked={handleLikeClicked}
                      isLiked={isLiked(article.id)}
                    />
                  )
              )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ArticleBlock;
