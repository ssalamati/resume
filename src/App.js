import React, { Component, createRef } from "react";
import SnowStorm from "react-snowstorm";

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navigation from "./sections/Navigation";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#4ab2dc",
      snowColorChanged: true
    };
    this.aboutRef = createRef();
    this.skillRef = createRef();
    this.titleRef = createRef();


  }
  handleUpdateColor = event => {
    this.setState({ color: event.target.value, snowColorChanged: false });

    setTimeout(
      function() {
        this.setState({ snowColorChanged: true });
      }.bind(this),
      10
    );
  };

  scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
  goToAbout = () => this.scrollToRef(this.aboutRef)

    goToSkill = () => this.scrollToRef(this.skillRef)
    goToTitle = () => this.scrollToRef(this.titleRef)

  render() {
    return (
      <div className="App" style={{ "--base": this.state.color }}>
        <Navigation
          color={this.state.color}
          changeColor={this.handleUpdateColor}
          goToAbout={this.goToAbout}
          goToSkill={this.goToSkill}
        />

        {this.state.snowColorChanged && (
          <SnowStorm
            snowColor={this.state.color}
            targetElement="snow-target"
            snowStick={false}
          />
        )}
        <div className="navigation"></div>
        <div id="snow-target" ref={this.titleRef}>
          <TitleSection
            color={this.state.color}
            goToNextPage={this.goToAbout}
          />
        </div>
        <div ref={this.aboutRef}>
          <AboutSection goToNextPage={this.goToSkill} />
        </div>
        <div ref={this.skillRef}>
          <SkillSection goToNextPage={this.goToTitle} />
        </div>
      </div>
    );
  }
}
export default App;
