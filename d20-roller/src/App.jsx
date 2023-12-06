import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DiceRoll from "./components/DiceRoll";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/DiceRoll" element={<DiceRoll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
