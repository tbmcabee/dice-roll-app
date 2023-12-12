import React, { useState } from "react";
import "./DiceRoll.css";

const DamageDice = ({ DiceSelected, CountOfDice, CritIsCrunchy, ModOfDam }) => {
  const [damageDice, setDamageDice] = useState({
    DiceResult: [],
    TrueSum: 0,
  });

  const rollDice = () => {
    const rolls = [];
    let sumOfDam = 0;

    for (let i = 0; i < CountOfDice; i++) {
      let maxNumber;

      switch (DiceSelected) {
        case "d4":
          maxNumber = 4;
          break;
        case "d6":
          maxNumber = 6;
          break;
        case "d8":
          maxNumber = 8;
          break;
        case "d10":
          maxNumber = 10;
          break;
        case "d12":
          maxNumber = 12;
          break;
        case "d20":
          maxNumber = 20;
          break;
        default:
          maxNumber = 20;
          break;
      }

      const randomNum1 =
        CritIsCrunchy && i === 0
          ? maxNumber
          : Math.floor(Math.random() * maxNumber) + 1;
      console.log(randomNum1);
      rolls.push(randomNum1);

      sumOfDam += randomNum1;
    }

    const tempSum = isNaN(ModOfDam) ? sumOfDam : ModOfDam + sumOfDam;

    console.log(ModOfDam);

    setDamageDice({
      ...damageDice,
      DiceResult: rolls,
      TrueSum: tempSum,
    });
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <button className="btn btn-primary mt-1 mb-1" onClick={rollDice}>
            Roll Damage Dice
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex flex-wrap justify-content-center">
          {damageDice.DiceResult.map((roll, index) => (
            <div
              className="container-dice"
              key={index}
              style={{ display: "inline-block", margin: "12px" }}
            >
              <svg className="container-dice" height="60" width="60">
                <polygon
                  points="30 5,55 18,55 42, 30 55,5 42,5 18"
                  stroke="black"
                  fill="gold"
                  stroke-width="3.5"
                />
                <text
                  x="30"
                  y="35"
                  textAnchor="middle"
                  fill="black"
                  className="font-bold"
                >
                  {roll}
                </text>
              </svg>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col mt-3 text-center">
          <h5>Damage Output</h5>
          <p>{damageDice.TrueSum}</p>
        </div>
      </div>
    </div>
  );
};

export default DamageDice;
