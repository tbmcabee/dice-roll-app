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
        <div className="alert alert-danger" role="alert">
          There are no dice to remove!
        </div>
      )}
      <div>
        <div>
          <h5>Your Rolls</h5>
          {!DamageMode && (
            <div className="container">
              <div className="d-flex flex-wrap justify-content-center">
                {diceTray.DiceArray.length > 0 &&
                  diceTray.DiceArray.map((dice, index) => (
                    <div key={index} className="mr-2 mb-2">
                      {dice}
                    </div>
                  ))}
              </div>
              <div>
                <button className="btn btn-primary mt-1" onClick={addDice}>
                  Add
                </button>
                <button
                  className="btn btn-primary ml-1 mt-1 w-10"
                  onClick={removeDice}
                >
                  Remove
                </button>
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
