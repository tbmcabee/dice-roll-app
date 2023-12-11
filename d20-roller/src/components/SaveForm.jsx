import React from "react";

const SaveForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        {
          if (diceRoll.DamageMode) {
            rollDice();
          }
        }
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
        {diceRoll.DamageMode && (
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
        )}
        {diceRoll.DamageMode && (
          <div className="form-check form-switch mt-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="crunchyCritsFlip"
              onChange={toggleCrunchyCrit}
            />
            <label className="form-check-label" htmlFor="crunchyCritsFlip">
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
      {diceRoll.DamageMode && (
        <button type="submit" className="btn btn-primary mb-3 mt-3">
          Roll Dice
        </button>
      )}
    </form>
  );
};

export default SaveForm;
