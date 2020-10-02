import React, { Component } from "react";

import DevIcon from "devicon-react-svg";
import "./SkillCard.css";

class SkillCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconObject: () => null
    };
  }
  // componentDidMount() {
  // import(skill.content.icon).then((icon) =>
  //   this.setState({ iconObject: () => icon })
  // );
  // }
  render() {
    const { skill } = this.props;

    return (
      <div className="card">
        <DevIcon
          icon={skill.content.icon}
          style={{
            fill: "white",
            width: "90%",
            margin: "0 auto"
          }}
        />
        <div className="skill-title-wrapper">
          <h4> {skill.content.title} </h4>
        </div>
      </div>
    );
  }
}

export default SkillCard;
