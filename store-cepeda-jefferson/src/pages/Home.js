import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";

/*components */
import Header from "../components/Header";

export default function Home() {
    return (
        <ContainerGeneral>
            <Header />
            <Container>
                <Banner />
            </Container>
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
    
`