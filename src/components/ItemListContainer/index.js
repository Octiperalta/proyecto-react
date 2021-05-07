import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import Container from "react-bootstrap/Container";
import Loader from "../Loader";
import { useParams } from "react-router-dom";
import { fetchItems } from "../../services/products";
import styled from "styled-components";

function ItemListContainer() {
  const [items, setItems] = useState();
  const { id } = useParams();
  const categorieName = {
    jackets: {
      title: "Camperas",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod nihil. Quae doloremque",
    },
    gloves: {
      title: "Guantes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quidem!",
    },
    helmets: {
      title: "Cascos",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
  }[id] || { title: "Todos los productos" };

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
          <CategorieName>
            <h1>{categorieName.title}</h1>
            {categorieName.description && <p>{categorieName.description}</p>}
          </CategorieName>
          <ItemList items={items}></ItemList>
        </Container>
      ) : (
        <Loader text={"Cargando lista de productos..."} color='danger' />
      )}
    </>
  );
}

export default ItemListContainer;

const CategorieName = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: -0.5rem 0 1rem;

  h1 {
    color: #333;
    font-size: 3.5rem;
    font-family: "Raleway";
    font-weight: 700;
    line-height: 0.9;
  }
  p {
    color: #999;
  }
`;
