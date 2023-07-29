import React from "react";
import { useParams } from "react-router-dom";
import CategoryPage from "../../components/CategoryPage/CategoryPage";
import "./Category.css";

const Category = ({ articles }) => {
  const { category } = useParams();

  const filteredArticles = articles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="container">
      <CategoryPage category={category} articles={filteredArticles} />
    </div>
  );
};

export default Category;
