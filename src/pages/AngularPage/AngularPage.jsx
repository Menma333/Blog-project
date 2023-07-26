import React from "react";
import CategoryPage from "../../components/CategoryPage/CategoryPage";

const AngularPage = ({ category, articles }) => {
  return <CategoryPage category="Angular" articles={articles} />;
};

export default AngularPage;
