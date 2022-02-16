import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Wheel } from "react-custom-roulette";

export default function Coins() {
  return (
    <ContainerGeneral>
      <Roulette />
    </ContainerGeneral>
  );
}

/*Roulette */
function Roulette() {
  const data = [
    {
      option: 0,
      style: {
        backgroundColor: "#a9d6e5",
        textColor: "white",
      },
    },
    {
      option: 0,
      style: {
        backgroundColor: "#abc4ff",
        textColor: "white",
      },
    },
    {
      option: 1000,
      style: {
        backgroundColor: "#3f37c9",
        textColor: "white",
      },
    },
    {
      option: 0,
      style: {
        backgroundColor: "#a9d6e5",
        textColor: "white",
      },
    },
    {
      option: 0,
      style: {
        backgroundColor: "#abc4ff",
        textColor: "white",
      },
    },
    {
      option: 5000,
      style: {
        backgroundColor: "#023e8a",
        textColor: "white",
      },
    },
    {
      option: 0,
      style: {
        backgroundColor: "#a9d6e5",
        textColor: "white",
      },
    },
    {
      option: 0,
      style: {
        backgroundColor: "#abc4ff",
        textColor: "white",
      },
    },
    {
      option: 7500,
      style: {
        backgroundColor: "#5a189a",
        textColor: "white",
      },
    },
  ];
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [coins, setCoins] = useState();
  /*spin click */
  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    handleCoins(newPrizeNumber);
  };

  const handleCoins = (prizeNumber) => {
    if (prizeNumber === 2) {
      setCoins(1000);
    } else if (prizeNumber === 5) {
      setCoins(5000);
    } else if (prizeNumber === 8) {
      setCoins(7500);
    } else {
      setCoins(0);
    }
  };
  console.log("monedas", coins);
  return (
    <>
      <h3>Coin Roulette</h3>
      {coins > 0 && !mustSpin ? (
        <Winner>
          CONGRATULATIONS!!! you have won <strong>{coins}</strong> coins.
        </Winner>
      ) : (
        <p>To win coins, spin the wheel.</p>
      )}
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderWidth="1"
        innerBorderColor="white"
        innerBorderWidth="20"
        outerBorderColor="white"
        radiusLineColor="white"
        radiusLineWidth="2"
        perpendicularText={true}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <ContainerBtn>
        {coins > 0 && !mustSpin ? (
          <Btn>Save coins</Btn>
        ) : !mustSpin ? (
          <Btn onClick={handleSpinClick}>
            {coins === 0 ? "Again spin" : "Spin"}
          </Btn>
        ) : null}
      </ContainerBtn>
    </>
  );
}

/*styles */

const ContainerGeneral = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-Back);
  height: calc(100% - 31px);
  min-height: calc(100% - 31px);
  padding: 10px 40px;
  color: var(--color-Text);
  > h3 {
    margin-bottom: 1rem;
  }
  & div:nth-child(3) {
    margin: 1rem 0 0;
    @media (max-width: 1023px) {
        margin: 1rem 0;
    }
  }
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-Orange);
  color: var(--color-White);
  border-radius: 50px;
  font-size: 0.8rem;
  margin: 0 0.5rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const AnimationWinner = keyframes`
    0% {transform:scale(1)}
    50%{transform:scale(1.1)}
    100%{transform:scale(1)}
`;

const Winner = styled.div`
  text-align: center;
  transition: 0.4s;
  animation-name: ${AnimationWinner};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
