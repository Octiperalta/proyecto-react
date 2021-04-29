import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getOrder } from "../../services/order";
import Loader from "../Loader";

const Confirmation = styled.div`
  width: 70%;
  margin: 5rem auto;
  font-family: Poppins;

  .breadcrumb {
    font-size: 0.85rem;
    /* background-color: red; */
  }

  h3 {
    font-family: Raleway;
    color: #333;
    text-transform: uppercase;
    margin: 1.5rem 0;
    letter-spacing: 1px;
    font-size: 4rem;
    font-weight: 600;
  }

  .alert {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .more-info {
    margin-top: 3.5rem;
    color: #555;

    button {
      outline: none;
      margin-top: 1rem;
      cursor: pointer;
      border: 1px solid #46494f;
      color: #46494f;
      border-radius: 0.3rem;
      padding: 0.3rem 1rem;
      font-size: 0.9rem;
      text-transform: uppercase;
      transition: background-color 150ms linear;
      font-weight: 500;
      letter-spacing: 1px;

      &:hover {
        background-color: #46494f;
        color: #f3f3f3;
      }
    }
  }

  .order-info {
    background-color: #eceff1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 1.5rem 2.2rem;
    margin-top: 3rem;
    gap: 3rem;

    & > div {
      /* background-color: pink; */
      padding: 0 1rem 0 1rem;

      /* & + div { */
      /* border-left: 1px solid grey; */
      /* } */

      .detail-name {
        text-transform: uppercase;
        font-size: 0.85rem;
        color: #999;
        letter-spacing: 1px;
        font-weight: 300;
        margin-bottom: 0.5rem;
      }

      .detail-info {
        font-weight: 700;
        color: #333;
        font-size: 1rem;
      }
    }
  }
`;

const ModifiedLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`;

function CheckoutConfirmed() {
  const { orderID } = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    getOrder(orderID).then(res => setOrder(res.data()));
  }, []);

  return (
    <>
      {order ? (
        <Confirmation>
          <div className='breadcrumb'>
            <div className='breadcrumb-item'>
              <ModifiedLink to='/'>Home</ModifiedLink>
            </div>
            <div className='breadcrumb-item active'>Order confirmed</div>
          </div>
          <h3>Order confirmed</h3>
          <div className='alert alert-success'>Your order is confirmed</div>

          <div className='more-info'>
            <p>Thank you, {order.buyer.name}. Your order is confirmed.</p>
            <p>
              Your order hasn't shipped yet but we will send you ane email when
              it does.
            </p>

            <button>
              <ModifiedLink to='/'>Back to dashboard</ModifiedLink>
            </button>
          </div>

          <div className='order-info'>
            <div>
              <div className='detail-name'>Order id</div>
              <div
                className='detail-info'
                style={{ textTransform: "uppercase" }}>
                {orderID}
              </div>
            </div>
            <div>
              <div className='detail-name'>Date</div>
              <div className='detail-info'>
                {`${order.date
                  .toDate()
                  .getDate()}/${order.date
                  .toDate()
                  .getMonth()}/${order.date.toDate().getFullYear()}`}
              </div>
            </div>
            <div>
              <div className='detail-name'>Total</div>
              <div className='detail-info'>${order.totalPrice}</div>
            </div>
            <div>
              <div className='detail-name'>Contact Email</div>
              <div className='detail-info'>{order.buyer.email}</div>
            </div>
          </div>
        </Confirmation>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default CheckoutConfirmed;
