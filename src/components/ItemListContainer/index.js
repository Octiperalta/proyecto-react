import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import Container from "react-bootstrap/Container";
import Loader from "../Spinner";
import { useParams } from "react-router-dom";
import products from "../../stock";

const fetchItems = categoryID => {
  let filteredProducts = products;

  if (categoryID) {
    filteredProducts = products.filter(
      prod => prod.category.categoryID === categoryID
    );
  }

  // console.log("Antes de la promesa", filteredProducts);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(filteredProducts), 2000);
  });
};

function ItemListContainer() {
  const [items, setItems] = useState();
  const { id } = useParams(); // ID de Categoria

  useEffect(() => {
    fetchItems(Number(id)).then(res => setItems(res));

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
