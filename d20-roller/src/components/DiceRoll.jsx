import React, { useState } from "react";
import NavBar from "./NavBar";
import "./DiceRoll.css";

const DiceRoll = () => {
  const [diceRoll, setDiceRoll] = useState({
    DiceResult: [],
    DiceCount: 10,
    SelectedDice: "d20",
    DiceCheck: 0,
    DCResult: [],
    DamageMode: false,
    DamModifier: 0,
    SumOfDam: 0,
    TrueSum: 0,
    CrunchyCrit: false,
  });

  const toggleDamageMode = () => {
    if (diceRoll.DamageMode) {
      diceRoll.CrunchyCrit = false;
    }
    setDiceRoll({
      ...diceRoll,
      DamageMode: !diceRoll.DamageMode,
      DamModifier: 0,
      DiceCheck: 0,
    });
  };

  const toggleCrunchyCrit = () => {
    setDiceRoll({ ...diceRoll, CrunchyCrit: !diceRoll.CrunchyCrit });
  };

  const rollDice = () => {
    const rolls = [];
    const checks = [];

    for (let i = 0; i < diceRoll.DiceCount; i++) {
      let maxNumber;

      switch (diceRoll.SelectedDice) {
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
        diceRoll.CrunchyCrit && i === 0
          ? maxNumber
          : Math.floor(Math.random() * maxNumber) + 1;
      console.log(randomNum1);
      rolls.push(randomNum1);

      if (diceRoll.DamageMode) {
        diceRoll.SumOfDam += randomNum1;
      }
      if (randomNum1 < diceRoll.DiceCheck) {
        checks.push(false);
      } else {
        checks.push(true);
      }
    }
    const TempSum = isNaN(diceRoll.DamModifier)
      ? diceRoll.SumOfDam
      : diceRoll.DamModifier + diceRoll.SumOfDam;

    console.log(diceRoll.DamModifier);

    setDiceRoll({
      ...diceRoll,
      DiceResult: rolls,
      DCResult: checks,
      TrueSum: TempSum,
      SumOfDam: 0,
    });
  };

  return (
    <>
      <div className="container">
        {console.log(diceRoll.DiceResult)}
        {console.log(diceRoll.DCResult)}
        {console.log(diceRoll.DamageMode)}
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
              {!diceRoll.DamageMode && (
                <div>
                  <label htmlFor="dcInput" className="form-label mt-4">
                    Enter DC for Dice Rolls
                  </label>
                  <input
                    name="dcInput"
                    type="number"
                    className="form-control"
                    id="dcInput"
                    onChange={(e) =>
                      setDiceRoll({
                        ...diceRoll,
                        DiceCheck: parseInt(e.target.value),
                      })
                    }
                    min="1"
                    max="100"
                    placeholder="Enter the DC here"
                  />
                </div>
              )}
              {diceRoll.DamageMode && (
                <div>
                  <label htmlFor="damModInput" className="form-label mt-4">
                    Damage Modifier
                  </label>
                  <input
                    name="damModInput"
                    type="number"
                    className="form-control"
                    id="damModInput"
                    onChange={(e) =>
                      setDiceRoll({
                        ...diceRoll,
                        DamModifier: parseInt(e.target.value),
                      })
                    }
                    min="1"
                    max="100"
                    placeholder="Enter Damage Modifer"
                  />
                </div>
              )}
              <div>
                <label htmlFor="diceSelect" className="form-label mt-2">
                  Choose a dice:
                </label>
                <select
                  id="diceSelect"
                  className="form-select"
                  value={diceRoll.SelectedDice}
                  onChange={(e) =>
                    setDiceRoll({ ...diceRoll, SelectedDice: e.target.value })
                  }
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
                  onChange={(e) =>
                    setDiceRoll({
                      ...diceRoll,
                      DiceCount: parseInt(e.target.value),
                    })
                  }
                  min="1"
                  max="100"
                  placeholder="Enter number of Dice to roll"
                />
              </div>

              <div>
                {!diceRoll.DamageMode && (
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
                )}
                {diceRoll.DamageMode && (
                  <div className="form-check form-switch mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="crunchyCritsFlip"
                      onChange={toggleCrunchyCrit}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="crunchyCritsFlip"
                    >
                      Crunchy Crits
                    </label>
                  </div>
                )}
                <div className="form-check form-switch mt-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="damageRollsFlip"
                    onChange={toggleDamageMode}
                  />
                  <label className="form-check-label" htmlFor="damageRollsFlip">
                    Damage Rolls
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mb-3 mt-3">
                Roll Dice
              </button>
            </form>
          </div>
          <div className="col-8 text-center mt-3">
            {diceRoll.DiceResult.length > 0 && (
              <div>
                <h5>Your Rolls</h5>
                {diceRoll.DiceResult.map((roll, index) => (
                  <div
                    className="container-dice"
                    key={index}
                    style={{ display: "inline-block", margin: "12px" }}
                  >
                    <svg className="container-dice" height="60" width="60">
                      <polygon
                        points="30 5,55 18,55 42, 30 55,5 42,5 18"
                        stroke="black"
                        fill={diceRoll.DCResult[index] ? "green" : "red"}
                        stroke-width="3.5"
                      />
                    </svg>
                    <div className="centered">{roll}</div>
                  </div>
                ))}
              </div>
            )}
            {diceRoll.DamageMode && (
              <div className="mt-3">
                <h5>Damage Output</h5>
                <p>{diceRoll.TrueSum}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiceRoll;
