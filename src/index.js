import React from "react";
import ReactDOM from "react-dom";
import "./style/vendor/bootstrap-grid.min.css";
import "./style/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./todelete_state";

ReactDOM.render(
  <React.StrictMode>
    <App
      NavbarItemsData={store.getNavbarItems()}
      DashboardNavBar={store.getDashboardNavBarItems()}
      ArticlesCategoriesData={store.getArticlesCategoriesItems()}
      ArticlesData={store.getArticlesItems()}
      AboutData={store.getAboutInfo()}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
