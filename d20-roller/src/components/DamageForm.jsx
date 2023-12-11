import React, { useState } from "react";

const DamageForm = ({ diceRollState }) => {
  const [damageForm, setDamageForm] = useState(diceRollState);

  return (
    <form>
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
            setDamageForm({
              ...damageForm,
              DamModifier: parseInt(e.target.value),
            })
          }
          min="1"
          max="100"
          placeholder="Enter Damage Modifer"
        />
      </div>
      <div>
        <label htmlFor="diceSelect" className="form-label mt-2">
          Choose a dice:
        </label>
        <select
          id="diceSelect"
          className="form-select"
          value={diceRoll.SelectedDice}
          onChange={(e) =>
            setDamageForm({
              ...damageForm,
              SelectedDice: e.target.value,
            })
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
              setDamageForm({
                ...damageForm,
                DiceCount: parseInt(e.target.value),
              })
            }
            min="1"
            max="100"
            placeholder="Enter number of Dice to roll"
          />
        </div>
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
  );
};

export default DamageForm;
