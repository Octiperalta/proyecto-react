import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail";
import Loader from "../Spinner";
import products from "../../stock";

const getItems = productID => {
  return new Promise((resolve, reject) => {
    const product = products.find(prod => prod.productID === Number(productID));
    setTimeout(() => {
      // console.log(product);
      resolve(product);
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    // console.log(id);

    getItems(id).then(res => setItem(res));
  });

  return (
    <>
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <Loader text={"Cargando informacion del producto..."} color='danger' />
      )}
      ;
    </>
  );
}

export default ItemDetailContainer;
