import React, { Component } from "react";

import Fullpage from "../components/Fullpage";
import NextPage from "../components/NextPage";

import data from "../data.json";
import "./AboutSection.css";

class AboutSection extends Component {
  render() {
    return (
      <Fullpage className="second">
        <h3 className="fullpage-first-element">{data.sections[0].title}</h3>
        <div className="paragraphs">
          {data.sections[0].items.map(p => {
            return <p>{p.content}</p>;
          })}
        </div>
        <NextPage goToNextPage={this.props.goToNextPage} type="down" />
      </Fullpage>
    );
  }
}

export default AboutSection;
