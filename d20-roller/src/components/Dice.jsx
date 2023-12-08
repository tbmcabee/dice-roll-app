import React, { useState } from "react";
import "./DiceRoll.css";

const Dice = ({ diceCheck, selectedDice }) => {
  const [dice, setDice] = useState({
    modifer: 0,
    name: "Default",
    roll: 0,
  });

  const roll = () => {
    let maxNumber;

    switch (selectedDice) {
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

    setDice({
      ...dice,
      roll: Math.floor(Math.random() * maxNumber) + 1,
    });
  };

  return (
    <div className="col-2 text-center">
      <div className="container-dice">
        <svg className="container-dice" height="60" width="60">
          <polygon
            points="30 5,55 18,55 42, 30 55,5 42,5 18"
            stroke="black"
            fill={dice.roll >= diceCheck ? "green" : "red"}
            stroke-width="3.5"
          />
        </svg>
        <div className="centered">{dice.roll}</div>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            roll();
          }}
        >
          <div className="text-center mt-2">
            <input
              name="diceModInput"
              type="number"
              className="text-center justify-content-center border border-primary mb-2"
              id="diceModInput"
              onChange={(e) =>
                setDice({
                  ...dice,
                  modifer: parseInt(e.target.value),
                })
              }
              min="0"
              max="100"
              placeholder="Mod"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary mt-1">
              Roll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dice;
