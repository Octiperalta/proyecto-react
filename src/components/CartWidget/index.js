import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../context/CartContext";

const Badge = styled.div`
  background: #fff;
  color: #46494f;
  border-radius: 50%;
  position: absolute;
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
  top: -7px;
  right: -7px;
`;

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <i className='bx bx-cart'></i>
      {Boolean(cart.length) && <Badge>{cart.length}</Badge>}
    </>
  );
};

export default CartWidget;
