import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/user/UserContext";
import { useState } from "react";
import Loading from "../shared/Loading";

export default function CardProduct({ data }) {
  const { user, redeem, postRedeem } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  /*destructuring data */
  const { name, cost, category, img, _id } = data;

  const HandlerRedeem = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
    await postRedeem(_id);
    user.points -= cost;
  };

  return (
    <ContainerGeneral>
      <Image src={img.url}>
        {user.points < cost ? (
          <div className="icon orange">
            <span className="material-icons">monetization_on</span>
          </div>
        ) : (
          <div className="icon">
            <span className="material-icons">shopping_bag</span>
          </div>
        )}
      </Image>
      <Info>
        <p>{category}</p>
        <p>{name}</p>
        <Cost>
          <p>
            <span className="material-icons">monetization_on</span>
            {cost}
          </p>
          {user.points < cost ? (
            <NavLink to="/coins">
              <div className="redeem orange">Go win coins</div>
            </NavLink>
          ) : (
            <div className="redeem" onClick={HandlerRedeem}>
              {loading ? (
                <Loading type="spin" color="var(--color-White)" width="16px" />
              ) : (
                "Reddem now"
              )}
            </div>
          )}
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
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Image = styled.div`
  width: 100%;
  flex: 1;
  position: relative;
  background-image: url(${(props) => props.src});
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
  .orange {
    background-color: var(--color-Orange);
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
  .orange {
    background-color: var(--color-Orange);
  }
`;
