import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
`;

const ModifiedLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`;

function CheckoutConfirmed() {
  return (
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
        <p>Thank you, Joe. Your order is confirmed.</p>
        <p>
          Your order hasn't shipped yet but we will send you ane email when it
          does.
        </p>

        <button>
          <ModifiedLink to='/'>Back to dashboard</ModifiedLink>
        </button>
      </div>
    </Confirmation>
  );
}

export default CheckoutConfirmed;
