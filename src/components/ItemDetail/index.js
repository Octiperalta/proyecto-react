import React, { useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

const ModifiedLink = styled(Link)`
  text-decoration: none;
  color: #46494f;

  &:hover {
    text-decoration: underline;
    color: inherit;
  }
`;

const ItemImage = styled(Col)`
  /* background-color: red; */
  width: 550px;
  height: 550px;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;
const ItemDetails = styled(Col)`
  /* background-color: lightblue; */
  padding: 15px 30px;
  font-family: "Poppins";
  min-height: 35rem;

  .breadcrumb {
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 0.9rem;
  }
`;

const DetailCard = styled.div`
  margin-top: 30px;

  .detail-card-title {
    font-family: "Raleway";
    font-size: 3.8rem;
    font-weight: 600;
    line-height: 0.9;
    letter-spacing: 0.5px;
  }

  .detail-card-info {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      font-size: 1.5rem;
      color: rgba(181, 96, 87, 0.9);

      font-weight: 500;

      /* opacity: 0.8; */
    }
    .ratings {
      font-size: 1.2rem;

      span {
        margin-left: 10px;
        font-family: "Montserrat";
        font-size: 0.9rem;
        text-transform: uppercase;
        opacity: 0.8;
        font-weight: 400;
      }
      i {
        color: #b56057;
      }
    }
  }

  .brief-description {
    opacity: 0.8;
  }
  .purchase-details {
    /* background-color: pink; */
    margin-top: 10px;
    /* display: flex; */

    .free-shipping {
      /* background-color: red; */
      display: flex;
      align-items: center;
      i {
        margin: 0 5px;
        font-size: 1.125rem;
        margin-right: 5px;
        line-height: 1;
      }
      span {
        text-transform: uppercase;
        font-weight: 500;
        color: #29bb89;
      }
    }

    .size {
      display: flex;
      flex-direction: column;
      label {
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 1px;

        span {
          text-transform: lowercase;
          font-weight: 500;
          font-size: 0.9rem;
          font-family: "Montserrat";
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }

    .color {
      margin-left: 10px;

      span {
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 1px;
      }
      .radio-input {
        display: flex;

        label {
          margin-right: 10px;
          border: 1px solid grey;
          border-radius: 4px;
          padding: 2px 10px;
          color: rgba(0, 0, 0, 0.7);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
          font-family: "Montserrat";
          cursor: pointer;
          transition: background 200ms ease-in-out;
          font-size: 0.8rem;

          &:hover {
            background: #536162;
            color: #f3f4ed;
          }
        }

        input[type="radio"] {
          visibility: hidden;
          display: none;

          &:checked + label {
            background: #536162;
            color: #f3f4ed;
          }
        }
      }
    }

    .quantity {
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 1px;
      position: relative;

      .submit-purchase {
        width: 15rem;
        height: 100%;
        /* background-color: red; */
        margin-left: 13rem;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          font-size: 1.3rem;
          transition: transform 0.5s ease-in-out;
        }
        &:hover i {
          transform: translateX(50%);
        }
      }
    }
  }
`;

function ItemDetail({ item }) {
  const [count, setCount] = useState();

  return (
    <Container fluid>
      <Row className='mx-2'>
        <ItemImage xs='1'>
          <img src={item.imageUrl} alt='' />
        </ItemImage>
        <ItemDetails xs='7' className='border rounded'>
          <div className='breadcrumb'>
            <div className='breadcrumb-item'>
              <ModifiedLink to='/'>Home</ModifiedLink>
            </div>
            <div className='breadcrumb-item'>
              <ModifiedLink to={`/category/${item.category.categoryID}`}>
                {item.category.categoryName}
                {/* {console.log(item.category)} */}
              </ModifiedLink>
            </div>
            <div className='breadcrumb-item active'>
              {item.productName.shortName}
            </div>
          </div>
          <DetailCard>
            <h4 className='detail-card-subtitle text-muted h5'>
              {item.category.categoryName}
            </h4>
            <h2 className='detail-card-title'>{item.productName.longName}</h2>
            <p className='detail-card-info'>
              <span className='price'>${item.productPrice}</span>
              <span className='ratings'>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star-half'></i>
                <i className='bx bx-star'></i>
                <span> 20 reviews </span>
              </span>
            </p>
            <p className='brief-description'>
              {item.description.shortDescription}
            </p>

            <div className='purchase-details mt-4'>
              {item.freeShipping && (
                <Row>
                  <div className='free-shipping mb-3'>
                    <i className='bx bx-package bx-flip-horizontal'></i>
                    Envío <span className='mx-2'>gratis</span> en Argentina
                  </div>
                </Row>
              )}

              <Row>
                <Col>
                  <div className='size'>
                    <label>
                      Size <span>(required)</span>
                    </label>
                    <select
                      className='custom-select'
                      defaultValue={"Select Size"}>
                      <option>Select Size</option>
                      {item.stock.sizes.map(size => (
                        <option value={size} key={size}>
                          {size}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col>
                  <div className='color'>
                    <span>Color</span>
                    <div className='radio-input'>
                      <input
                        type='radio'
                        id='customRadio1'
                        name='customRadio'
                        className='custom-control-input'
                      />
                      <label
                        className='custom-control-label'
                        htmlFor='customRadio1'>
                        Black
                      </label>

                      <input
                        type='radio'
                        id='customRadio2'
                        name='customRadio'
                        className='custom-control-input'
                      />
                      <label
                        className='custom-control-label'
                        htmlFor='customRadio2'>
                        Grey
                      </label>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className='quantity mt-4'>
                <span>Quantity</span>
                <ItemCount
                  initial={0}
                  stock={item.stock.stockAvailable}
                  onAdd={setCount}
                />
                <ModifiedLink to={"/cart"} style={{ textDecoration: "none" }}>
                  <button
                    disabled={!count}
                    className='button button-main-outline submit-purchase'>
                    Terminar mi compra
                    <i
                      className='bx bx-chevron-right'
                      style={{ marginLeft: "0.5rem" }}></i>
                  </button>
                </ModifiedLink>
              </div>
            </div>
          </DetailCard>
        </ItemDetails>
      </Row>
    </Container>
  );
}

export default ItemDetail;
