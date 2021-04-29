import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const ContainerCentered = styled(Container)`
  display: grid;
  place-items: center;
`;

function Loader({ text, color }) {
  return (
    <ContainerCentered>
      <Spinner animation='border' role='status' variant={color} />
      <strong>{text}</strong>
    </ContainerCentered>
  );
}

export default Loader;
