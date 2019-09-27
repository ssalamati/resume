import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SkillCard.css";

class SkillCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconObject: ""
    };
  }
  componentDidMount() {
    const { skill } = this.props;
    import(`@fortawesome/free-brands-svg-icons/${skill.content.icon}`).then(
      icon => this.setState({ iconObject: icon })
    );
  }
  render() {
    const { skill } = this.props;

    return (
      <div className="card">
        <div className={`skill-icons-wrapper ${skill.content.color||""}`}>
          <FontAwesomeIcon icon={this.state.iconObject[skill.content.icon]} />
        </div>
        <div className="skill-title-wrapper">
          <h4> {skill.content.title} </h4>
        </div>
      </div>
    );
  }
}

export default SkillCard;
