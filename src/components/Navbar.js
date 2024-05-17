import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="">Lib</a>
        </div>
        <div className="menu" data-hover="HoverEffect">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Collection</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a href="">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
