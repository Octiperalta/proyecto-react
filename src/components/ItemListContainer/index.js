import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import Container from "react-bootstrap/Container";
import Loader from "../Spinner";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";

const fetchItems2 = async categoryID => {
  const db = getFirestore();
  if (categoryID) {
    const itemsCollection = await db
      .collection("items")
      .where("category.categoryID", "==", categoryID)
      .get();

    const dbItems = itemsCollection.docs.map(item => {
      return { productID: item.id, ...item.data() };
    });

    return dbItems;
  }

  const itemsCollection = await db.collection("items").get();

  const dbItems = itemsCollection.docs.map(item => {
    return { productID: item.id, ...item.data() };
  });
  return dbItems;
};

function ItemListContainer() {
  const [items, setItems] = useState();
  const { id } = useParams(); // ID de Categoria

  useEffect(() => {
    fetchItems2(id).then(res => setItems(res));

    return () => {
      setItems(null);
    };
  }, [id]);

  return (
    <>
      {items ? (
        <Container fluid>
          <ItemList items={items}></ItemList>
        </Container>
      ) : (
        <Loader text={"Cargando lista de productos..."} color='danger' />
      )}
    </>
  );
}

export default ItemListContainer;
