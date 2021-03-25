import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

const getItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        productName: "Un producto",
        price: 250,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt ipsum, dolor sit amet consectetur adipisicing elit. Temporibus tempora nemo, sunt odit laudantium ullam assumenda ipsam ex quaerat perferendis! ",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/91aPRdRf21L._AC_SL1500_.jpg",
      });
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState({});

  useEffect(() => {
    getItems().then(res => setItem(res));
  });

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
