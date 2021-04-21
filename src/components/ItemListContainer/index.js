import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import Container from "react-bootstrap/Container";
import Loader from "../Spinner";
import { useParams } from "react-router-dom";
import { fetchItems } from "../../services/products";

function ItemListContainer() {
  const [items, setItems] = useState();
  const { id } = useParams(); // ID de Categoria

  useEffect(() => {
    fetchItems(id).then(res => setItems(res));

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
