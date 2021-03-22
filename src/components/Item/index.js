import React from "react";
import "./Item.scss";

function Item({ itemData }) {
  return (
    <li>
      <div className='card'>
        <div className='card-img'>
          <img src={itemData.imageUrl} alt='' />
        </div>
        <div className='card-body'>
          <h5 className='item-category'> {itemData.productID}</h5>
          <h3 className='item-name'> {itemData.productName}</h3>
          <p className='item-price'>${itemData.productPrice}</p>
        </div>
      </div>
    </li>
  );
}

export default Item;
