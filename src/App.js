import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Dashboard from "./components/dashboard/Dashboard";
import Articles from "./components/articles/Articles";
import Login from "./components/login/Login";

import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar navitems={props.NavbarItemsData} />
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route
        path="/articles"
        render={() => (
          <Articles
            articlesCategories={props.ArticlesCategoriesData}
            articles={props.ArticlesData}
          />
        )}
      />
      <Route path="/about" render={() => <About about={props.AboutData} />} />
      <Route path="/login" component={Login} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
