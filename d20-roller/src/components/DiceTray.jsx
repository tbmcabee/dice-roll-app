import React, { useState } from "react";
import Dice from "./Dice";
import DamageDice from "./DamageDice";

const DiceTray = ({
  DamageMode,
  SelectedDice,
  DiceCheck,
  DiceCount,
  DamModifier,
  CrunchyCrit,
}) => {
  const [diceTray, setDiceTray] = useState({
    ArrayAlert: false,
    DiceArray: [],
  });

  const removeDice = () => {
    if (diceTray.DiceArray.length > 0) {
      const tempArray = diceTray.DiceArray;
      tempArray.pop();
      setDiceTray({ ...diceTray, DiceArray: tempArray });
    } else {
      setDiceTray({ ...diceTray, ArrayAlert: true });
    }
    console.log(diceTray.DiceArray);
  };

  const addDice = () => {
    const tempArray = diceTray.DiceArray;
    tempArray.push(<Dice diceCheck={DiceCheck} selectedDice={SelectedDice} />);
    setDiceTray({
      ...diceTray,
      DiceArray: tempArray,
      ArrayAlert: false,
    });
    console.log(diceTray.DiceArray);
  };

  return (
    <div>
      {diceTray.ArrayAlert && (
        // <div className="alert alert-danger" role="alert">
        //   There are no dice to remove!
        // </div>
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">HALT</strong>
          <span class="block sm:inline">
            {" "}
            you have broken the law! There are no dice to remove...
          </span>
        </div>
      )}
      <div>
        <div>
          <h5 className="mb-3">Your Rolls</h5>
          {!DamageMode && (
            <div className="container">
              <div className="container flex justify-content-center mb-3">
                <div className="mr-1">
                  <button
                    className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded-full"
                    onClick={addDice}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  <button
                    className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded-full"
                    onClick={removeDice}
                  >
                    DEL
                  </button>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                {diceTray.DiceArray.length > 0 &&
                  diceTray.DiceArray.map((dice, index) => (
                    <div key={index} className="mr-2 mb-2">
                      {dice}
                    </div>
                  ))}
              </div>
            </div>
          )}
          {DamageMode && (
            <div>
              <DamageDice
                DiceSelected={SelectedDice}
                CountOfDice={DiceCount}
                CritIsCrunchy={CrunchyCrit}
                ModOfDam={DamModifier}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiceTray;
