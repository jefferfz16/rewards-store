import React from "react";
import styled from "styled-components";
import BannerImage from "../assets/images/header-x2.png";

export default function Banner() {
    return (
        <ContainerGeneral>
            <Image />
            <h1>Electronics</h1>
        </ContainerGeneral>
    )
}

const ContainerGeneral = styled.div`
    width: 100%;
    height: 350px;
    padding: 10px 40px;
    position: relative;
    background-color: var(--color-White);
    @media(max-width: 1023px) {
        padding: 5px 1rem;
        }
    @media(max-width: 767px) {
        height: 200px;
    }
    > h1 {
        position: absolute;
        bottom: 40px;
        left: 5%;
        color: var(--color-White);
        font-size: 3rem;
        font-weight: 300;
        @media(max-width: 1023px) {
            font-size: 2rem;
        }
        @media(max-width: 767px) {
            font-size: 1.5rem;
            left: 40px;
        }
    }
`

const Image = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background-image: url(${BannerImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media(max-width: 767px) {
        background-position: right;
    }
`