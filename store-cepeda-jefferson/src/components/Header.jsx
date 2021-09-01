import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.svg";

export default function Header() {
    return (
        <ContainerGeneral>
            <img src={logo} alt="logo" />
            <UserDate>
                <p>Samuel Cepeda Bernal</p>
                <Currency>
                    <p>6000</p>
                    <span className="material-icons">monetization_on</span>
                </Currency>
            </UserDate>
        </ContainerGeneral>
    )
}

/*styles */
const ContainerGeneral = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 40px;
    justify-content: space-between;
    align-items: center;
`

const UserDate = styled.span`
    display: flex;
    align-items: center;
    color: var(--color-Text);
`

const Currency = styled.div`
    min-width: 100px;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    background-color: var(--color-Purple);
    color: var(--color-White);
    margin-left: 1rem;
    font-weight: 500;
    > span {
        color: var(--color-Orange);
        background-color: var(--color-White);
        border-radius: 24px;
        margin-left: 0.5rem;
    }
`