import React from "react";
import CategoryPage from "../../components/CategoryPage/CategoryPage";

const VuePage = ({ category, articles }) => {
  return <CategoryPage category="Vue.js" articles={articles} />;
};

export default VuePage;
