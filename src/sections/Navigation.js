import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import NextPage from "../components/NextPage";


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
