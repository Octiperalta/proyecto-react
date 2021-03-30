import React from "react";
import Item from "../Item";
import styled from "styled-components";

const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

function ItemList({ items }) {
  // console.log(items);
  return (
    <ProductsList>
      {items.map(item => (
        <Item key={item.productID} itemData={item} />
      ))}
    </ProductsList>
  );
}

export default ItemList;
