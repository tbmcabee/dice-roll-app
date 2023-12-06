import React, { useState } from "react";
import NavBar from "./NavBar";
import "./DiceRoll.css";

const DiceRoll = () => {
  const [diceResult, setDiceResult] = useState([]);
  const [diceCount, setDiceCount] = useState(10);
  const [selectedDice, setSelectedDice] = useState("d20");
  const [diceCheck, setDiceCheck] = useState(0);
  const [dcResult, setDCResult] = useState([]);

  //add in crunchy crit functionality
  //add in modifiers functionality
  //add in damage mode functionality

  const rollDice = () => {
    const rolls = [];
    const checks = [];

    for (let i = 0; i < diceCount; i++) {
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
      const randomNum1 = Math.floor(Math.random() * maxNumber) + 1;
      rolls.push(randomNum1);
      console.log(randomNum1);
      console.log(diceCheck);
      if (randomNum1 < diceCheck) {
        checks.push(false);
      } else {
        checks.push(true);
      }
    }
    setDiceResult(rolls);
    setDCResult(checks);
    console.log(rolls);
    console.log(checks);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Dice Roller Project</h1>
        <NavBar />
        <h2 className="text-center mb-3">D&D Dice Roller</h2>
        <div className="row justify-content-center">
          <div className="col-4 text-left">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                rollDice();
              }}
            >
              <div>
                <label htmlFor="dcInput" className="form-label mt-4">
                  Enter DC for Dice Rolls
                </label>
                <input
                  name="dcInput"
                  type="number"
                  className="form-control"
                  id="dcInput"
                  onChange={(e) => setDiceCheck(parseInt(e.target.value))}
                  min="1"
                  max="100"
                  placeholder="Enter the DC here"
                />
              </div>
              <div>
                <label htmlFor="diceSelect" className="form-label mt-2">
                  Choose a dice:
                </label>
                <select
                  id="diceSelect"
                  className="form-select"
                  value={selectedDice}
                  onChange={(e) => setSelectedDice(e.target.value)}
                >
                  <option value="d4">D4</option>
                  <option value="d6">D6</option>
                  <option value="d8">D8</option>
                  <option value="d10">D10</option>
                  <option value="d12">D12</option>
                  <option value="d20">D20</option>
                </select>
              </div>
              <div>
                <label htmlFor="diceInput" className="form-label mt-2">
                  Amount of Dice
                </label>
                <input
                  name="diceInput"
                  type="number"
                  className="form-control"
                  id="diceInput"
                  onChange={(e) => setDiceCount(parseInt(e.target.value))}
                  min="1"
                  max="100"
                  placeholder="Enter number of Dice to roll"
                />
              </div>
              <div>
                <div className="form-check form-switch mt-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="modifiersFlip"
                  />
                  <label className="form-check-label" htmlFor="modifiersFlip">
                    Modifiers
                  </label>
                </div>
                <div className="form-check form-switch mt-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="damageRollsFlip"
                  />
                  <label className="form-check-label" htmlFor="damageRollsFlip">
                    Damage Rolls
                  </label>
                </div>
                <div className="form-check form-switch mt-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="crunchyCritsFlip"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="crunchyCritsFlip"
                  >
                    Crunchy Crits
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mb-3 mt-3">
                Roll Dice
              </button>
            </form>
          </div>
          <div className="col-8 text-center mt-3">
            {diceResult.length > 0 && (
              <div>
                <h5>Your Rolls</h5>
                {diceResult.map((roll, index) => (
                  <div
                    className="container-dice"
                    key={index}
                    style={{ display: "inline-block", margin: "12px" }}
                  >
                    <svg className="container-dice" height="60" width="60">
                      <polygon
                        points="30 5,55 18,55 42, 30 55,5 42,5 18"
                        stroke="black"
                        fill={dcResult[index] ? "green" : "red"}
                        stroke-width="3.5"
                      />
                    </svg>
                    <div className="centered">{roll}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiceRoll;
