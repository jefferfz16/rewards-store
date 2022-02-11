import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import ProductsContext from "../../context/products/ProductsContext";
import UserContext from "../../context/user/UserContext";
/*Components */
import CardProduct from "./CardProduct";

export default function PrincipalProducts() {
  const { products, getProducts } = useContext(ProductsContext);
  const { user } = useContext(UserContext);
  console.log("llega", products)
  console.log("llega usuarios", user)
  useEffect(() => {
    getProducts();
  },[]);

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
          {products.map((product) => {
            return <CardProduct key={product._id} data={product} />;
          })}
        </Container>
      </ContainerProducts>
    </ContainerGeneral>
  );
}

/* const DataProducts = [
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
  },
]; */

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
  @media (max-width: 1425px) {
    justify-content: center;
  }
`;
