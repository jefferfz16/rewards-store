import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <ContainerGeneral>
      <p>Diseñado y desarrollado por Jefferson Cepeda</p>
    </ContainerGeneral>
  );
}

const ContainerGeneral = styled.div`
  width: 100%;
  background-color: var(--color-Purple);
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-White);
  font-size: 0.8rem;
  position: fixed;
  bottom: 0;
`;
