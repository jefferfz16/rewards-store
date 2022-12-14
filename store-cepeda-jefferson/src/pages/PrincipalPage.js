import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import ProductsState from "../context/products/ProductsState";

/*components */
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrincipalProducts from "../components/sectionProducts/PrincipalProducts";
import PrincipaLViewHistory from "../components/shoppingHistory/PricipalView";
import Coins from "../components/points/Roulette";

export default function PrincipalPage() {
  return (
    <ContainerGeneral>
      <Routes>
      <Header />
        <Route path='/' element={<Home />} />
        <Route exact path='/coins' element={<Points />} />
        <Route exact path='/history' element={<History />} />
      <Footer />
      </Routes>
    </ContainerGeneral>
  );
}

const Home = () => {
  return (
    <Container>
      <Banner />
      <ProductsState>
        <PrincipalProducts />
      </ProductsState>
    </Container>
  );
};

const History = () => {
  return (
    <Container>
      <PrincipaLViewHistory />
    </Container>
  );
};

const Points = () => {
  return (
    <Container>
      <Coins />
    </Container>
  );
};

/*sytles*/
const ContainerGeneral = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  flex: 1;
  overflow: auto;
  z-index: 9;
`;
