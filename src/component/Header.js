import React from "react";
import logo from "../logo.svg";
import "../index.css";

export default function Header() {
  return (
    <nav className="nav-items" style={{ backgroundColor: "#ff6347" }}>
      <div className="div1">
        <img src={logo} alt="reactJS" className="nav--logo" />
        <h2>ReactJS</h2>
      </div>

      <ul className="nav-item">
        <div className="searchbar">
          <input type="search" />
          <button type="search">search</button>
        </div>
        <li>
          <b>Home</b>
        </li>
        <li>
          <b>about</b>
        </li>
        <li>
          <b>contact</b>
        </li>
      </ul>
    </nav>
  );
}
