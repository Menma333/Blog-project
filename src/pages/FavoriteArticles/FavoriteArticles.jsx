import React from "react";
import ArticleItem from "../../components/ArticleItem/ArticleItem";

const FavoriteArticles = ({ favorites, handleLikeClicked }) => {
  return (
    <div className="container">
      <h1>Favorite Articles</h1>
      {favorites.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          isLiked={true}
          handleLikeClicked={handleLikeClicked}
        />
      ))}
    </div>
  );
};

export default FavoriteArticles;
