import React, { Component } from "react";

import "./Navigation.css"

export default function Navigation(props) {
  return (
    <div className="navbar">
      <div className="nav-color-input">
        <label>Color Me </label>
        <input
          type="color"
          value={props.color}
          onChange={props.changeColor}
          onMouseMove={props.changeColor}
        />
      </div>
      <ul className="nav-links-wrapper">
        <li onClick={props.goToAbout}>About</li>
        <li onClick={props.goToSkill}>Skills</li>
      </ul>
    </div>
  );
}
