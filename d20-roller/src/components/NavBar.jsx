import React from "react";

const NavBar = () => {
  return (
    <div className="mb-3">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Current Projects
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/DiceRoll">
                DnD Dice Roller
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/ApiExample">
                DnD 5e API Example
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
