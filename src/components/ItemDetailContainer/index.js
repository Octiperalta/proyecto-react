import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../Loader";
import ItemDetail from "../ItemDetail";
import { getItems } from "../../services/products";

function ItemDetailContainer() {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    getItems(id).then(res => setItem({ productID: res.id, ...res.data() }));
  }, [id]);

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
