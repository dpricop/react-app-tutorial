import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={style.headerNav}>
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName={style.current}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" activeClassName={style.current}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/articles" activeClassName={style.current}>Articles</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName={style.current}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName={style.current}>Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;