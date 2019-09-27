import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

import Fullpage from "../components/Fullpage";
import NextPage from "../components/NextPage";

import data from "../data.json";
import "./TitleSection.css";

class TitleSection extends Component {
  render() {
    return (
      <Fullpage className="first">
        <h1 className="title fullpage-first-element">{data.title}</h1>
        <div>
          <h2 class="sub-title">{data.subtitle}</h2>
        </div>
        <div className="title-icons-wrapper">
          {Object.keys(data.links).map(key => {
            return (
              <div className="icon">
                <SocialIcon bgColor={this.props.color} url={data.links[key]} />
              </div>
            );
          })}
        </div>
        <NextPage goToNextPage={this.props.goToNextPage} type="down" />
      </Fullpage>
    );
  }
}

export default TitleSection;
