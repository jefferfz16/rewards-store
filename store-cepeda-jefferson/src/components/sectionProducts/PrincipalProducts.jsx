import React from "react";
import styled from "styled-components";
/*Components */
import CardProduct from "./CardProduct";
/*Images products */
import imagen1 from "../../assets/images/products/AcerAspire-x2.png";
import imagen2 from "../../assets/images/products/Alienware13-x2.png";
import imagen3 from "../../assets/images/products/AmazonEchoDot-x2.png";
import imagen4 from "../../assets/images/products/AmazonEcho-x2.png";

export default function PrincipalProducts() {
  return (
    <ContainerGeneral>
      <HeaderFilter>
        <div className="filter">
          <p>Sort by:</p>
          <BtnFilter className="active">Most recent</BtnFilter>
          <BtnFilter>Lowest price</BtnFilter>
          <BtnFilter>Highest price</BtnFilter>
        </div>
        <div className="pager">
          <p>16 of 32 products</p>
        </div>
      </HeaderFilter>
      <ContainerProducts>
          <Container>
            {DataProducts.map((product) => {
            return <CardProduct key={product._id} data={product} />;
            })}
          </Container>
      </ContainerProducts>
    </ContainerGeneral>
  );
}

/*Data */

const DataProducts = [
  {
    _id: "5a033eeb364bf301523e9b92",
    name: "Sandalia Pale Gold YSL",
    cost: 200,
    category: "Indumentaria",
    img: {
      url: imagen1,
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
    },
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: imagen2,
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
    },
  }
];

/*Styles */
const ContainerGeneral = styled.div`
  width: 100%;
  min-height: calc(100vh - 430px);
  display: flex;
  flex-direction: column;
`;

const HeaderFilter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  .filter {
    display: flex;
    align-items: center;
    .active {
      background-color: var(--color-Purple);
      color: var(--color-White);
    }
  }
  .pager {
    display: flex;
    align-items: center;
  }
`;

const BtnFilter = styled.div`
  padding: 0.5rem 1rem;
  background-color: var(--color-Back);
  border-radius: 50px;
  color: var(--color-Text);
  font-size: 0.8rem;
  margin: 0 0.5rem;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: var(--color-Hover-Btn);
  }
`;

const ContainerProducts = styled.div`
  width: 100%;
  flex: 1;
  padding: 10px 40px;
  display: flex;
  justify-content: center;
  background-color: var(--color-Back);
`;

const Container = styled.div`
    width: 100%;
    /* max-width: 1440px; */
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`
