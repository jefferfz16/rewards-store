import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import ProductsContext from "../../context/products/ProductsContext";
import UserContext from "../../context/user/UserContext";
import Toast from "../Toast";
/*Components */
import CardProduct from "./CardProduct";

export default function PrincipalProducts() {
  const { products, getProducts } = useContext(ProductsContext);
  const { redeem } = useContext(UserContext);
  useEffect(() => {
    getProducts();
  }, []);

  const [startProducts, setStartProducts] = useState(0);
  const [numberProducts, setNumberProducts] = useState(16);

  const reduceProducts = products.slice(startProducts, numberProducts);

  const arrowRight = () => {
    setStartProducts(16);
    setNumberProducts(32);
  };

  const arrowLeft = () => {
    setStartProducts(0);
    setNumberProducts(16);
  };

  //lowest price
  const [low, setLow] = useState(false);
  const handlerLow = () => {
    setLow(!low);
    setHigh(false);
    setStartProducts(0);
    setNumberProducts(16);
    if (!low === true) {
      products.sort((a, b) => {
        if (a.cost > b.cost) {
          return 1;
        }
        if (a.cost < b.cost) {
          return -1;
        }
        return 0;
      });
    } else {
      getProducts();
    }
  };
  //highest price
  const [high, setHigh] = useState(false);
  const handlerHigh = () => {
    setHigh(!high);
    setLow(false);
    setStartProducts(0);
    setNumberProducts(16);
    if (!high === true) {
      products.sort((a, b) => {
        if (a.cost < b.cost) {
          return 1;
        }
        if (a.cost > b.cost) {
          return -1;
        }
        return 0;
      });
    } else {
      getProducts();
    }
  };
  //show toast
  const [show, setShow] = useState(false);
  const closeToast = () => {
    redeem.message = " ";
    setShow(!show);
  };

  setTimeout(() => {
    redeem.message = " ";
    setShow(!show);
  }, 5000);

  return (
    <ContainerGeneral>
      {redeem.message != " " && (
        <Toast label={redeem.message} close={closeToast} />
      )}
      <HeaderFilter>
        <div className="filter">
          <p>Sort by:</p>
          <BtnFilter
            className={low ? "active" : undefined}
            onClick={handlerLow}
          >
            Lowest price
          </BtnFilter>
          <BtnFilter
            className={high ? "active" : undefined}
            onClick={handlerHigh}
          >
            Highest price
          </BtnFilter>
        </div>
        <div className="pager">
          <span
            onClick={arrowLeft}
            className={
              startProducts === 0 ? "material-icons opacity" : "material-icons"
            }
          >
            chevron_left
          </span>
          <p>{numberProducts} of 32 products</p>
          <span
            onClick={arrowRight}
            className={
              numberProducts === 32
                ? "material-icons opacity"
                : "material-icons"
            }
          >
            chevron_right
          </span>
        </div>
      </HeaderFilter>
      <ContainerProducts>
        <Container>
          {reduceProducts.map((product) => {
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
  margin-bottom: 31px;
`;

const HeaderFilter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: var(--color-White);
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
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
    @media (max-width: 767px) {
      margin: 1rem 0;
      justify-content: space-between;
      width: 100%;
    }
    .opacity {
      opacity: 0;
      &:hover {
        cursor: initial;
      }
    }
    > span {
      margin: 0 0.5rem;
      &:hover {
        cursor: pointer;
      }
    }
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
  @media (max-width: 767px) {
    padding: 10px;
  }
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
