import React from "react";
import styled from "styled-components";
import ProductsState from "../context/products/ProductsState";

/*components */
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrincipalProducts from "../components/sectionProducts/PrincipalProducts";

export default function Home() {
    return (
        <ContainerGeneral>
            <Header />
            <Container>
                <Banner />
                <ProductsState>
                    <PrincipalProducts />
                </ProductsState>
            </Container>
            <Footer />
        </ContainerGeneral>
    )
}

/*sytles*/
const ContainerGeneral = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    flex: 1;
    overflow: auto;
    z-index: 9;
    
`