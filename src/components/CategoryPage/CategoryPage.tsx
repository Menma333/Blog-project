import React from "react";
import ArticleItem from "../ArticleItem/ArticleItem";
import "../CategoryPage/CategoryPage.css";

const CategoryPage = ({ category, articles }) => {
  const filteredArticles = articles.filter(
    (article) => article.category === category
  );

  return (
    <div className="category-page">
      <h1 className="category-title">{category} Articles</h1>
      <div className="article-list">
        {filteredArticles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
