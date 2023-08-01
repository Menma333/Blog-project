import React from "react";
import ArticleItem from "../../components/ArticleItem/ArticleItem";

const FavoriteArticle = ({ favorites }) => {
  return (
    <div className="container">
      <h1>Favorite Articles</h1>
      {favorites.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default FavoriteArticle;
