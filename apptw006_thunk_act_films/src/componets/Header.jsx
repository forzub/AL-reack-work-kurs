import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './Header.module.css';

const Header = () => (
    <header className={Style.header}>
        <nav>
            <ul className={`${Style.nav} ${Style.nav_tabs}`} >
                <li className={Style.nav_item}>
                    <NavLink  to='/counter' className={Style.nav_link}>Counter</NavLink>
                </li>
                <li className={Style.nav_item}>
                    <NavLink  to='/input-range' className={Style.nav_link}>Input Range</NavLink>
                </li>
                <li className={Style.nav_item}>
                    <NavLink to='/movies' className={Style.nav_link}>Movies</NavLink>
               </li>
                <li className={Style.nav_item}>
                    <NavLink to='/db' className={Style.nav_link}>DB</NavLink>
               </li>
            </ul>
        </nav>
    </header>
);

export default Header;