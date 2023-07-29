import React from "react";
import ArticleItem from "../ArticleItem/ArticleItem";

const CategoryPage = ({ category, articles }) => {
  const filteredArticles = articles.filter(
    (article) => article.category === category
  );

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Articles</h1>
      {filteredArticles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default CategoryPage;
