import React from "react";
import CategoryPage from "../../components/CategoryPage/CategoryPage";

const ReactPage = ({ category, articles }) => {
  return <CategoryPage category="React" articles={articles} />;
};

export default ReactPage;
