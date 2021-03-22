import React from "react";
import Item from "../Item";

function ItemList({ items }) {
  return (
    <ul style={{ display: "flex" }}>
      {items.map(item => (
        // <Item key={item.productName}></Item>
        <Item key={item.productID} itemData={item} />
      ))}
    </ul>
  );
}

export default ItemList;
