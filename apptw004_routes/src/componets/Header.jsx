import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => (

  <header>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/products">Products</NavLink>
      </li>

    </ul>
  </header>

)


export default Header;