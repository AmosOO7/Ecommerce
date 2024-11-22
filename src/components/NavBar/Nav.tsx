import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Cart from "../../assets/Cart.jpg";
const Nav = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ProductList">Products</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <button className="nav-button">O</button>
      </div>
      <img src={Cart} className="image-cart"></img>
    </div>
  );
};

export default Nav;
