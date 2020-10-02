import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import NextPage from "../components/NextPage";

class TitleSection extends Component {
  render() {
    return (
      <Fullpage className="first">
        <h1 className="title fullpage-first-element">{data.title}</h1>
        <div className="subtitle">
          <h2>{data.subtitle}</h2>
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
        <NextPage goToNextPage={this.props.goToNextPage} type="down"/>
      </Fullpage>
    );
  }
}

export default TitleSection;
