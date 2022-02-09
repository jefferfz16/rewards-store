import React from "react";
import styled from "styled-components";

export default function CardProduct({data}) {
    /*destructuring data */
    const{name, cost, category, img} = data
  return (
    <ContainerGeneral>
      <Image src={img.url}>
          <div className='icon'>
            <span className="material-icons">shopping_bag</span>
          </div>
      </Image>
      <Info>
        <p>{category}</p>
        <p>{name}</p>
        <Cost>
            <p>
                <span className="material-icons">monetization_on</span>
                {cost}
            </p>
            <div className='redeem'>Redeem now</div>
        </Cost>
      </Info>
    </ContainerGeneral>
  );
}

/*Styles */

const ContainerGeneral = styled.div`
  width: calc(100% / 5 - 16px);
  min-width: 250px;
  height: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-White);
  transition: 0.4s;
  margin: 8px;
  z-index: 9;
  &:hover {
      transform: translateY(-4px);
      box-shadow: var(--box-shadow);
      z-index: 999;
  }
`;

const Image = styled.div`
  width: 100%;
  flex: 1;
  position: relative;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  .icon {
      width: 40px;
      height: 40px;
      padding: 0.5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-Purple);
      position: absolute;
      right: 1rem;
      top: 1rem;
      > span {
          color: var(--color-White);
      }
  }
`;

const Info = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  font-size: 0.8rem;
  & p:first-child {
    color: var(--color-Text);
    font-size: 0.7rem;
  }
`;

const Cost = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    > p {
        display: flex;
        align-items: center;
        > span {
            margin-right: 0.5rem;
            color: var(--color-Orange);
        }
    }
    .redeem {
        padding: 0.5rem 1rem;
        background-color: var(--color-Purple);
        border-radius: 50px;
        color: var(--color-White);
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`
