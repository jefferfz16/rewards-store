import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import UserContext from "../context/user/UserContext";
/*logo */
import logo from "../assets/images/logo.svg";
/*components */
import Loading from "./shared/Loading";
import { useState } from "react";

export default function Header() {
  const { user, getUser } = useContext(UserContext);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <ContainerGeneral>
      <NavLink to="/rewards-store">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      {user.name === undefined ? (
        <Loading type="spin" color="var(--color-Purple)" width="16px" />
      ) : (
        <UserDate>
          <p>
            <span className="material-icons">person</span>
            {user.name}
          </p>
          <Currency>
            <span className="material-icons">monetization_on</span>
            <p>{user.points}</p>
          </Currency>
        </UserDate>
      )}
      <div className="containerBtn">
        <NavLink activeclassname="active" to="/rewards-store/coins">
          <Btn>
            <span className="material-icons">emoji_events</span>
            <p>More Coins</p>
          </Btn>
        </NavLink>
        <NavLink activeclassname="active" to="/rewards-store/history">
          <Btn>
            <span className="material-icons">folder_special</span>
            <p>My Products</p>
          </Btn>
        </NavLink>
      </div>
    </ContainerGeneral>
  );
}

/*styles */
const ContainerGeneral = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 0.5rem 1rem;
    flex-wrap: wrap;
    height: auto;
    .logo {
      height: 35px;
    }
  }
  .containerBtn div:first-child {
    margin-right: 0.5rem;
  }
  .containerBtn {
    @media (max-width: 767px) {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 0.5rem;
    }
    .active div {
      background-color: var(--color-Hover-Btn);
      color: var(--color-Blue);
    }
  }
`;

const UserDate = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-Text);
  .loading {
    display: flex;
  }
  > p {
    display: flex;
    align-items: center;
    @media (max-width: 1023px) {
      display: none;
    }
    > span {
      margin-right: 1rem;
    }
  }
`;

const Currency = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.7rem;
  border-radius: 50px;
  background-color: var(--color-Purple);
  color: var(--color-White);
  margin-left: 1rem;
  font-weight: 500;
  > span {
    color: var(--color-Orange);
    background-color: var(--color-White);
    border-radius: 24px;
    margin-right: 0.5rem;
  }
`;

const Btn = styled.div`
  padding: 0.5rem 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  border-radius: 5px;
  color: var(--color-Text);
  @media (max-width: 767px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
  > span {
    margin-right: 0.5rem;
    color: var(--color-Blue);
  }
  &:hover {
    background-color: var(--color-Hover-Btn);
    cursor: pointer;
    color: var(--color-Blue);
  }
`;
