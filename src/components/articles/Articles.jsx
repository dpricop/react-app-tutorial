import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const ArticlesCategories = (props) => {
  let { url } = useRouteMatch();

  let Category = props.categories.map((item, index) => (
    <ul key={index}>
      <li>
        <NavLink to={url + "/" + item.slug}>{item.name}</NavLink>
      </li>

      {typeof item.children == "object" ? (
        <div>
          {item.children.map((el, k) => (
            <ul key={k}>
              <li>
                <NavLink to={url + "/" + item.slug + "/" + el.slug}>
                  {el.name}
                </NavLink>
              </li>
            </ul>
          ))}
        </div>
      ) : (
        <span> no children</span>
      )}
    </ul>
  ));

  return <div>{Category}</div>;
};

const LastArticles = (props) => {
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
      <h1>Last 6 articles</h1>
      <LastArticles previewArticle={props.articles} />
    </div>
  );
};
export default Articles;
