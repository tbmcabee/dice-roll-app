import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DiceRoll from "./components/DiceRoll";
import DndRace from "./components/DndRace";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/DiceRoll" element={<DiceRoll />} />
          <Route path="/ApiExample" element={<DndRace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
