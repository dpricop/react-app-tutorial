import React from "react";

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

export default LastArticles;
