import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

function Item({ itemData }) {
  const history = useHistory();

  const goToItemDetail = () => {
    history.push(`/item/${itemData.productID}`);
  };

  return (
    <li>
      <CardItem className='rounded border shadow'>
        <div className='card-item-image'>
          <Link to={`/item/${itemData.productID}`}>
            <img src={itemData.imageUrl} alt='' />
          </Link>

          <div className='product-links' style={{ pointerEvents: "none" }}>
            <span style={{ pointerEvents: "initial" }}>
              <i className='bx bxs-cart'></i>
            </span>
            <span onClick={goToItemDetail} style={{ pointerEvents: "initial" }}>
              <i className='bx bx-search-alt-2'></i>
              View
            </span>
            <span style={{ pointerEvents: "initial" }}>
              <i className='bx bx-fullscreen'></i>
            </span>
          </div>
        </div>
        <div className='card-item-body'>
          <p className='card-item-description'>
            {itemData.category.categoryName}
          </p>
          <ModifiedLink
            to={`/item/${itemData.productID}`}
            className='card-item-title'>
            {itemData.productName.shortName}
          </ModifiedLink>
          <p className='card-item-price'>${itemData.productPrice}</p>
        </div>
      </CardItem>
    </li>
  );
}

export default Item;

const CardItem = styled.div`
  width: 250px;
  margin-right: 10px;

  .card-item-image {
    padding: 0.4rem;
    overflow: hidden;
    border-bottom: 2px solid rgb(73, 80, 87);
    position: relative;
    transition: border-color 250ms ease-in-out;
    cursor: pointer;

    img {
      width: 100%;
      display: block;
      object-fit: cover;
    }

    &:hover {
      border-color: #ed6c5b;

      .product-links {
        opacity: 1;

        span {
          &:nth-of-type(1),
          &:nth-of-type(3) {
            transform: translateX(0);
            opacity: 1;
          }
        }
      }
    }

    .product-links {
      position: absolute;
      background-color: rgba(255, 255, 255, 0.8);
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 200ms ease-in-out;

      span {
        border: 1px solid #46494f;
        padding: 2px 5px;
        margin: 0 5px;
        text-align: center;
        font-size: 0.9rem;
        transition: background-color 250ms ease-in-out,
          transform 300ms ease-in-out, opacity 250ms ease-in-out;

        i {
          font-weight: 600;
          color: #46494f;
        }

        &:nth-of-type(2) {
          font-family: "Poppins";
          font-weight: 500;
          background-color: #be6b62;
          color: #f3f3f3;
          padding: 2px 20px;
          letter-spacing: 1.5px;
          line-height: 1.5;

          i {
            margin-right: 5px;
            color: #f3f3f3;
            line-height: 1.5;
          }

          &:hover {
            background-color: #a84f45;
          }
        }

        &:nth-of-type(1),
        &:nth-of-type(3) {
          opacity: 0;
          &:hover {
            background-color: #be6b62;

            i {
              color: #f3f3f3;
            }
          }
        }

        &:nth-of-type(1) {
          transform: translateX(-100%);
        }

        &:nth-of-type(3) {
          transform: translateX(100%);
        }
      }
    }
  }

  .card-item-body {
    font-family: "Montserrat";
    padding-left: 5px;

    .card-item-description {
      color: rgb(145, 149, 158);
      font-size: 0.8em;
      margin: 5px 0 0;
    }

    .card-item-title {
      color: rgb(55, 58, 67);
      font-size: 1em;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 0 0;
    }

    .card-item-price {
      color: rgb(145, 149, 158);
      margin-top: 0;
      margin: 5px 0;
    }
  }
`;

const ModifiedLink = styled(Link)`
  text-decoration: none;
  color: rgb(55, 58, 67);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
  padding: 0;
  line-height: 1;

  &:hover {
    text-decoration: underline;
  }
`;
