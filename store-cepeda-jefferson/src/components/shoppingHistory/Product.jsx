import React from "react";
import styled from "styled-components";

export default function Product({data}) {
  const {name, img, category, cost} = data;
  return (
    <ContainerGeneral>
      <Image src={img.url} />
      <Info>
        <h3>{name}</h3>
        <p>{category}</p>
        <p className="cost">
          <span className="material-icons">monetization_on</span>
          {cost}
        </p>
      </Info>
    </ContainerGeneral>
  );
}

/*sytles */
const ContainerGeneral = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: var(--color-White);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: fit-content;
  margin-top: 0.5rem;
`;

const Image = styled.div`
  background-color: var(--color-White);
  flex: 1;
  max-width: 250px;
  height: 120px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Info = styled.div`
    flex: 2;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h3 {
      color: var(--color-Text);
    }
    .cost {
      margin: 0.5rem 0;
      display: flex;
      align-items: center;
      color: var(--color-Purple);
      font-size: 0.8rem;
      > span {
        margin-right: 0.5rem;
      }
    }
    & p:nth-child(2) {
      font-size: 0.8rem;
      color: var(--color-Text);
    }
`;
