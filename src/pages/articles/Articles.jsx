import React from "react";
//import { NavLink, useRouteMatch } from "react-router-dom";
import ArticlesCategories from "./ArticlesCategories";
import LastArticles from "./LastArticles";

const Articles = (props) => {
  return (
    <div>
      <ArticlesCategories categories={props.articlesCategories} />
      <h1>Last 6 articles</h1>
      <LastArticles previewArticle={props.articles} />
    </div>
  );
};
export default Articles;
