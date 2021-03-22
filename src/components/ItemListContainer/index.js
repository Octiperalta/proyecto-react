import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";

import "./ItemListContainer.scss";

const products = [
  {
    productName: "Helmet",
    productID: 1,
    productPrice: "500",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61ox-GueYpL._AC_SL1500_.jpg",
  },
  {
    productName: "Gloves",
    productID: 2,
    productPrice: "200",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81HZ5-PBpaL._AC_SL1500_.jpg",
  },
  {
    productName: "Backpack",
    productID: 3,
    productPrice: "300",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/91aPRdRf21L._AC_SL1500_.jpg",
  },
];

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = new Promise((resolve, reject) => {
      setTimeout(() => resolve(products), 2000);
    });

    fetchItems.then(data => setItems(data));
  }, []);

  return (
    <div className='container'>
      <ItemList items={items} />
      <ItemCount initial={1} stock={3}></ItemCount>
      <ItemCount initial={2} stock={10}></ItemCount>
    </div>
  );
}

export default ItemListContainer;
