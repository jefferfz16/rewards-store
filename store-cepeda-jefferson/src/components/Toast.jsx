import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Toast = ({ label, close }) => {
  return (
    <Container>
      <p>{label}</p>
      <span
        onClick={() => {
          close();
        }}
        className="material-icons"
      >
        close
      </span>
    </Container>
  );
};

export default Toast;

const animation = keyframes`
from {
      bottom: -50px;
      visibility: 0;
    }
    to {
      bottom: 0;
      visibility: 1;
    }
`;

const Container = styled.div`
  position: fixed;
  z-index: 9999;
  background-color: var(--color-Green);
  padding: 10px 20px;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--box-shadow);
  border-radius: 5px 5px 0 0;
  animation: ${animation} 0.4s;
  > p,
  span {
    color: var(--color-White);
    transition: 0.4s;
    border-radius: 3px;
  }
  > span:hover {
    cursor: pointer;
    background-color: var(--color-White);
    color: var(--color-Green);
  }
`;
