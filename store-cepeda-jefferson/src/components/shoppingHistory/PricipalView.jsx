import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/user/UserContext";
/*Components */
import Product from "./Product";
import Loading from "../../components/shared/Loading";

export default function PrincipaLViewHistory() {
  const { getHistory, history } = useContext(UserContext);

  useEffect(() => {
    getHistory();
  }, []);

  const [numberProducts, setNumberProducts] = useState(20);
  const handlerMoreLoad = () => {
    setNumberProducts(numberProducts + 20);
  };

  const reduceHistory = history.slice(
    history.length - numberProducts,
    history.length
  );
  const reverse = reduceHistory.reverse();

  return (
    <ContainerProducts>
      <Head totalItems={history.length} />
      {history.length > 0 ? (
        <>
          <p>
            Last {numberProducts} products redeemed of {history.length}
          </p>
          {reduceHistory.map((item, index) => {
            return <Product key={index} data={item} />;
          })}
          <Btn onClick={handlerMoreLoad}>Load more products</Btn>
        </>
      ) : (
        <Loading type="spin" color="var(--color-Purple)" width="32px" />
      )}
    </ContainerProducts>
  );
}

const Head = ({ totalItems }) => {
  return (
    <ContainerHead>
      <NavLink to="/">
        <p>
          <span className="material-icons">arrow_back</span>
          Back home
        </p>
      </NavLink>
      <p>quantity of products: {totalItems}</p>
    </ContainerHead>
  );
};

/*styles */
const ContainerProducts = styled.div`
  width: 100%;
  flex: 1;
  min-height: calc(100% - 31px);
  padding: 10px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-Back);
  margin-bottom: 31px;
  & > div:nth-child(3) {
    margin-top: 0;
    border: 2px solid var(--color-Purple);
  }
  > p {
    margin: 2rem 0;
    color: var(--color-Text);
  }
  @media (max-width: 1023px) {
    padding: 10px 1rem;
    > p {
      margin: 1rem 0;
    }
  }
`;

const ContainerHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  > a {
    color: var(--color-Text);
    > p {
      display: flex;
      align-items: center;
      > span {
        margin-right: 0.5rem;
      }
    }
    &:hover {
      color: var(--color-Blue);
    }
  }
  & > p:last-child {
    font-weight: 600;
  }
`;

const Btn = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-Purple);
  color: var(--color-White);
  border-radius: 50px;
  font-size: 0.8rem;
  margin: 2rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
