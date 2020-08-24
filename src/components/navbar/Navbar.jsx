import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const NavbarItem = (props) => {
  return (
    <li>
      <NavLink to={props.to} exact activeClassName={style.current}>
        {props.value}
      </NavLink>
    </li>
  );
};

const Navbar = (props) => {
  let NavbarItems = props.navitems.map((item) => (
    <NavbarItem to={item.to} value={item.value} key={item.to} />
  ));

  return (
    <nav className={style.headerNav}>
      <ul>{NavbarItems}</ul>
    </nav>
  );
};
export default Navbar;
