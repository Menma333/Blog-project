import React from "react";
import { useParams } from "react-router-dom";
import CategoryPage from "../../components/CategoryPage/CategoryPage";

const Category = ({ articles }) => {
  const { category } = useParams();

  const filteredArticles = articles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );

  return <CategoryPage category={category} articles={filteredArticles} />;
};

export default Category;
