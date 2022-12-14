import React from "react";
import styled, { keyframes } from "styled-components";

const Toast = ({ status, close }) => {
  console.log(status);
  return (
    <Container status={status.status}>
      <p>
        {status.status === "error"
          ? "Sorry, something went wrong."
          : status.message}
      </p>
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
  background-color: ${(props) =>
    props.status === "exito" ? "var(--color-Green)" : "var(--color-Error)"};
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
    color: ${(props) =>
      props.status === "exito" ? "var(--color-Green)" : "var(--color-Error)"};
  }
`;
