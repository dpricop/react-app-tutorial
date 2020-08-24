import React from "react";
import { NavLink } from "react-router-dom";

const ArticlesCategories = (props) => {
  let Category = props.categories.map((item, index) => (
    <li key={index}>
      <NavLink to={item.value}>{item.value}</NavLink>
    </li>
  ));

  return <ul>{Category}</ul>;
};

const PreviewArticles = (props) => {
  let PreviewArticle = props.previewArticle.map((item, index) => (
    <div className="col-3" key={index}>
      <h3>{item.title}</h3>
      <span> slug: {item.slug}</span>
      <span> Category: {item.category}</span>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">{PreviewArticle}</div>
    </div>
  );
};

const Articles = (props) => {
  return (
    <div>
      <ArticlesCategories categories={props.articlesCategories} />
      <PreviewArticles previewArticle={props.articles} />
    </div>
  );
};
export default Articles;
