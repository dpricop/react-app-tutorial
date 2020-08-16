import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const NavbarItemsData = [
  { to: "/", value: "Home" },
  { to: "/dashboard", value: "Dashboard" },
  { to: "/articles", value: "Articles" },
  { to: "/about", value: "About" },
  { to: "/login", value: "Login" },
];

const NavbarItem = (props) => {
  return (
    <li>
      <NavLink to={props.to} exact activeClassName={style.current}>
        {props.value}
      </NavLink>
    </li>
  );
};

let NavbarItems = NavbarItemsData.map((item) => (
  <NavbarItem to={item.to} value={item.value} key={item.to} />
));

const Navbar = (props) => {
  return (
    <nav className={style.headerNav}>
      <ul>{NavbarItems}</ul>
    </nav>
  );
};
export default Navbar;
