let store = {
  _NavbarItemsData: [
    { to: "/", value: "Home" },
    { to: "/dashboard", value: "Dashboard" },
    { to: "/articles", value: "Articles" },
    { to: "/about", value: "About" },
    { to: "/login", value: "Login" },
  ],

  _DashboardNavBar: [
    { value: "Users" },
    { value: "Articles" },
    { value: "Categories" },
    { value: "Subcategories" },
  ],

  _ArticlesCategoriesData: [
    { value: "Politics" },
    { value: "Business" },
    { value: "Tech" },
    { value: "Sports" },
    { value: "Arts" },
  ],

  _ArticlesData: [
    { title: "First article 1", slug: "first-article-1", category: "Politics" },
    { title: "First article 2", slug: "first-article-2", category: "Business" },
    { title: "First article 3", slug: "first-article-3", category: "Business" },
    { title: "First article 4", slug: "first-article-4", category: "Sports" },
    { title: "First article 5", slug: "first-article-5", category: "Sports" },
    { title: "First article 6", slug: "first-article-6", category: "Arts" },
  ],
  _AboutData: {
    title: "title of about page",
    longText:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
  },

  getNavbarItems() {
    return this._NavbarItemsData;
  },
  getDashboardNavBarItems() {
    return this._DashboardNavBar;
  },
  getArticlesCategoriesItems() {
    return this._ArticlesCategoriesData;
  },
  getArticlesItems() {
    return this._ArticlesData;
  },
  getAboutInfo() {
    return this._AboutData;
  },
};

export default store;
