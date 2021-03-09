import React from "react";
import logo from "./logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    // <header></header>
    <header>
      <a href="#" class="logo">
        <img src={logo} alt="" />
      </a>

      <nav class="nav">
        <li class="nav-item">
          <a href="#">New Arrivals</a>
        </li>
        <li class="nav-item">
          <a href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a href="#">Shop</a>
        </li>
      </nav>

      <ul class="shop-nav">
        <li class="search-bar">
          <a href="#">
            <i class="fas fa-search"></i>
          </a>
        </li>
        <li class="user">
          <a href="#">
            <i class="fas fa-user-alt"></i>
          </a>
        </li>
        <li class="cart">
          <a href="#">
            <i class="fas fa-shopping-bag"></i>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
