import React from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";

const NavbarItem = (props) => {
  return (
    <li>
      <NavLink to={props.value}>{props.value}</NavLink>
    </li>
  );
};

const Dashboard = (props) => {
  let NavBarItems = props.options.map((item, index) => (
    <NavbarItem value={item.value} key={index} />
  ));

  return (
    <div>
      <ul>{NavBarItems}</ul>
      <div>Dashboard page</div>
    </div>
  );
};
export default Dashboard;
