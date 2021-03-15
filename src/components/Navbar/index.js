/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./logo.png";
import "./Navbar.scss";
import CartWidget from "../CartWidget/"

const Navbar = () => {
  return (
    <header>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>

      <nav className="nav">
        <li className="nav-item">
          <a href="#">New Arrivals</a>
        </li>
        <li className="nav-item">
          <a href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a href="#">Shop</a>
        </li>
      </nav>

      <ul className="shop-nav">
        <li className="search-bar">
          <a href="#">
            <i className="fas fa-search"></i>
          </a>
        </li>
        <li className="user">
          <a href="#">
            <i className="fas fa-user-alt"></i>
          </a>
        </li>
        <li className="cart">
          <CartWidget />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
