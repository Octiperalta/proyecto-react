import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

import styled from "styled-components";

const Counter = styled.div`
  gap: 0.5rem;
  height: 40px;
  position: relative;

  .inpunt-counter {
    height: 100%;
    width: 5.4rem;
    position: relative;
    margin-bottom: 1rem;
  }

  input {
    text-align: center;
    padding-right: 20px;
    width: 100%;
    height: 100%;
    &:focus {
      outline: none;
    }
  }

  &:hover .handle-buttons {
    opacity: 1;
  }
  .handle-buttons {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    height: 100%;
    position: absolute;
    right: 5px;
    top: 0;
    opacity: 0;
    transition: opacity 150ms ease-in-out;

    button {
      width: 15px;
      height: 15px;
      line-height: 18px;
      margin-bottom: 1px;
      padding: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: 10px;
      }
    }
  }
`;

const OutOfStock = styled.span`
  position: absolute;
  top: 50%;
  left: 90px;
  transform: translateY(-50%);
`;

function ItemCount({ initial, stock, onAdd, item }) {
  const [value, setValue] = useState(initial);
  const { addItem } = useContext(CartContext);

  const addToCart = () => {
    onAdd(value);
    addItem(item, value);
  };

  return (
    <Counter className='counter'>
      <div className='inpunt-counter'>
        <input type='text' value={value} readOnly />
        <div className='handle-buttons'>
          <button
            className='btn btn-secondary'
            disabled={value >= stock}
            onClick={() => setValue(value + 1)}>
            <i className='bx bxs-up-arrow'></i>
          </button>
          <button
            className='btn btn-secondary'
            disabled={value === 0}
            onClick={() => setValue(value - 1)}>
            <i className='bx bxs-down-arrow'></i>
          </button>
        </div>
      </div>
      <button
        className='button button-main'
        onClick={addToCart}
        disabled={value === 0}>
        <i className='bx bx-cart' style={{ marginRight: "0.5rem" }}></i>
        Agregar al Carrito
      </button>
      {stock === 0 && (
        <OutOfStock className='badge bg-danger'>Stock Agotado</OutOfStock>
      )}
    </Counter>
  );
}

export default ItemCount;
