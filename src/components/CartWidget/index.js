import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../context/CartContext";

const Badge = styled.div`
  position: absolute;
  top: -5px;
  right: -7px;
  z-index: 20;
  background-color: #46494f;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  span {
    color: #46494f;
    background-color: #f3f3f3;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    padding: 7px;
    text-align: center;
    font-family: Raleway;
    font-size: 0.65rem;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <i className='bx bx-cart'></i>
      {Boolean(cart.length) && (
        <Badge>
          <span>{cart.length}</span>
        </Badge>
      )}
    </>
  );
};

export default CartWidget;
