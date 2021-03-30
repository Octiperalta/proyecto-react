import React, { useState } from "react";
// import "./style.scss";

import styled from "styled-components";

const Counter = styled.div`
  background: red;
  width: 80px;
  height: 40px;
  position: relative;

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
    display: flex;
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
  /* background-color: #e84545; */
`;

function ItemCount({ initial, stock }) {
  const [value, setValue] = useState(initial);
  // console.log({ initial });

  return (
    <Counter className='counter'>
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
      {stock === 0 && (
        <OutOfStock className='badge bg-danger'>Stock Agotado</OutOfStock>
      )}
    </Counter>
  );
}

export default ItemCount;
