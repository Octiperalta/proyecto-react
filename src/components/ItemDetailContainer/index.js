import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../Spinner";
import ItemDetail from "../ItemDetail";

import { getFirestore } from "../../firebase";

const getItems2 = async productID => {
  const db = getFirestore();
  const itemsCollection = db.collection("items");
  const itemDetail = itemsCollection.doc(productID).get();

  return itemDetail;
};

function ItemDetailContainer() {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    getItems2(id).then(res => setItem({ productID: res.id, ...res.data() }));
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
