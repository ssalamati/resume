import React, { Component } from "react";

import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import NextPage from "../components/NextPage";

import "./SkillSection.css";
import data from "../data.json";

class SkillSection extends Component {
  render() {
    return (
      <Fullpage className="third">
        <h3 className="fullpage-first-element">{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(eachSkill => {
            return <SkillCard skill={eachSkill} />;
          })}
        </div>
        <NextPage goToNextPage={this.props.goToNextPage} type="up" />
      </Fullpage>
    );
  }
}

export default SkillSection;
