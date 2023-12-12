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
    <div className="text-center">
      <div className="inline-block">
        <svg className="inline-block" height="60" width="60">
          <polygon
            points="30 5,55 18,55 42, 30 55,5 42,5 18"
            stroke="black"
            fill={dice.roll >= diceCheck ? "green" : "red"}
            stroke-width="3"
          />

          <text
            x="30"
            y="35"
            textAnchor="middle"
            fill="black"
            className="font-bold"
          >
            {dice.roll}
          </text>
        </svg>
      </div>
      <div className="">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            roll();
          }}
          className="flex flex-col items-center"
        >
          <div className="mt-1">
            <input
              name="diceModInput"
              type="number"
              className="text-center ::placeholder w-30 px-1 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              id="diceModInput"
              onChange={(e) =>
                setDice({
                  ...dice,
                  modifer: parseInt(e.target.value),
                })
              }
              min="0"
              max="100"
              placeholder="Modify"
            />
          </div>
          <div className="mt-1">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded-full"
            >
              Roll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dice;
