import React from "react";
import CategoryPage from "../../components/CategoryPage/CategoryPage";

const VuePage = ({ articles }) => {
  return <CategoryPage category="Vue.js" articles={articles} />;
};

export default VuePage;
