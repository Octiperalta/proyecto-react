import React from "react";
import styled from "styled-components";

const DetailCard = styled.div`
  background-color: #ededed;
  /* width: 100%; */
  margin: 20px 50px;
  display: flex;
  border-radius: 18px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
`;
const ImgDetail = styled.div`
  width: 150px;

  img {
    width: 100%;
    /* object-fit: contain; */
    display: block;
  }
`;

const BodyDetail = styled.div`
  text-align: center;
  /* background-color: lightblue; */
  flex: 1;
  margin-top: 20px;
`;

function ItemDetail({ item }) {
  return (
    <>
      {item.productName ? (
        <DetailCard>
          <ImgDetail>
            <img src={item.imgUrl} alt='' />
          </ImgDetail>
          <BodyDetail>
            <h1> {item.productName} </h1>
            <p>${item.price} </p>
            <p>{item.description}</p>
          </BodyDetail>
        </DetailCard>
      ) : (
        <div style={{ textAlign: "center" }}>
          Cargando detalle de elemento...
        </div>
      )}
    </>
  );
}

export default ItemDetail;
