import React from "react";
import Item from "../Item";
import styled from "styled-components";

const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
  /* flex-wrap: wrap; */
  list-style-type: none;
`;

function ItemList({ items }) {
  return (
    <ProductsList>
      {items.map(item => (
        <Item key={item.productID} itemData={item} />
      ))}
    </ProductsList>
  );
}

export default ItemList;
