import React from "react";
import styled from "styled-components";

/*components */
import Header from "../components/Header";

export default function Home() {
    return (
        <ContainerGeneral>
            <Header />
            <h1>Pagina principal</h1>
        </ContainerGeneral>
    )
}

/*sytles*/
const ContainerGeneral = styled.div`
    width: 100%;
    height: 100vh;
`