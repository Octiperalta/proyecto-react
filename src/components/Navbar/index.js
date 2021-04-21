/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "./logo.png";
import CartWidget from "../CartWidget/";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  height: 30px;
  background-color: rgb(248, 249, 250);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  .info {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      padding: 0 10px;
      font-size: 0.8rem;
      font-family: Poppins;
      font-weight: 300;
      /* text-transform: uppercase; */
      letter-spacing: 1px;
    }

    .phone-contact {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
  }

  .social-media-links {
    display: flex;
    justify-content: center;

    svg {
      margin: 0 10px;
      font-size: 0.9rem;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.5);
      transition: color 250ms ease-in-out;

      &:hover {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const MyNavbar = styled.nav`
  width: 100%;
  min-height: 7vh;
  background-color: #46494f;
  padding: 0 calc(1rem + 10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed; */
  position: relative;
  /* top: 30px; */
  z-index: 1000;

  .categories {
    display: inline-flex;
    /* background-color: lightblue; */
    /* height: 7vh; */
    align-items: center;
  }

  .logo {
    width: 150px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .account {
    display: flex;
    align-items: center;
    list-style: none;
    height: 100%;
    /* background-color: red; */
    & > div {
      position: relative;
      margin-left: 20px;
      /* text-align: center; */
      i {
        /* margin-left: 20px; */
        font-size: 1.4rem;
        font-weight: 100;
        color: white;
        cursor: pointer;
      }
    }
    .cart {
      /* background-color: pink; */
      &:hover {
        .cart-dropdown {
          height: 300px;

          &:after {
            display: block;
          }
        }
      }

      .cart-dropdown {
        position: absolute;
        top: 130%;
        right: 0%;
        /* background-color: #46494f; */
        background-color: white;
        height: 0px;
        width: 250px;
        transition: 250ms ease-in-out;

        &:after {
          content: "";
          position: absolute;
          display: none;
          height: 10px;
          width: 10px;
          background-color: white;
          top: -5px;
          right: 4px;
          transform: rotate(-45deg);
        }

        .product-item {
          padding: 1rem;

          .item-img {
            width: 35%;
            padding: 0.5rem;
            flex-shrink: 0;

            img {
              width: 100%;
              display: block;
            }
          }

          .item-info {
            flex-grow: 1;
            background-color: pink;
            padding: 0.5rem 0;

            h4 {
              font-family: Raleway;
              color: #333;
              font-size: 0.95rem;
              font-weight: 600;
            }

            p {
              margin: 0;
            }
          }
        }
      }
    }
  }
`;

const CategoriesItem = styled.div`
  margin-right: 1.2rem;
  display: inline-block;
  height: 100%;

  a {
    text-decoration: none;
    color: #f3f3f3;
    font-family: Poppins;
    /* text-transform: uppercase; */
    font-weight: 500;
    font-family: "Raleway";
    position: relative;
    transition: color 200ms ease-in-out;
    font-size: 1rem;
    letter-spacing: 1px;

    &.active {
      /* color: red; */

      &:before {
        transform: scale(1);
      }
    }
    &:hover {
      /* color: #ed6c5b; */

      &:before {
        transform: scale(1);
      }
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      bottom: -3px;
      height: 2px;
      background-color: #ed6c5b;
      transform: scale(0);
      transform-origin: 0 0;
      transition: transform 200ms ease-in-out;
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <Header>
        <div className='info text-muted'>
          <span className='phone-contact'>
            <FontAwesomeIcon
              icon={faPhone}
              rotation={90}
              className='outline'
              style={{ marginRight: " 8px" }}
            />
            020-800-456-747
          </span>
          <span>Envío gratis en compras mayores a $500</span>
        </div>
        <div className='social-media-links'>
          <FontAwesomeIcon icon={faGlobeAmericas} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
      </Header>

      <MyNavbar>
        <div className='categories'>
          <CategoriesItem className='nav-item'>
            <NavLink to={"/category/helmets"} activeClassName='active'>
              Cascos
            </NavLink>
          </CategoriesItem>
          <CategoriesItem className='nav-item'>
            <NavLink to={"/category/jackets"} activeClassName='active'>
              Camperas
            </NavLink>
          </CategoriesItem>
          <CategoriesItem className='nav-item'>
            <NavLink to={"/category/gloves"} activeClassName='active'>
              Guantes
            </NavLink>
          </CategoriesItem>
        </div>

        <Link to='/'>
          <img src={logo} alt='wbikes-logo' className='logo' />
        </Link>

        <div className='account'>
          <div>
            <i className='bx bx-search'></i>
          </div>
          <div>
            <i className='bx bx-user'></i>
          </div>
          <div className='cart'>
            <Link to='/cart'>
              <CartWidget />
            </Link>
          </div>
        </div>
      </MyNavbar>
    </>
  );
};

export default Navbar;
