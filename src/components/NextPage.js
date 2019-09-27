import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

import "./NextPage.css"

class NextPage extends Component {
  render() {
    const iconObj =
      this.props.type === "up"
        ? faSortUp
        : this.props.type === "down"
        ? faSortDown
        : null;
    console.log(`next-page ${this.props.type || ""}`);
    return (
      <div className={`next-page ${this.props.type || ""}`}>
        <FontAwesomeIcon icon={iconObj} onClick={this.props.goToNextPage} />
      </div>
    );
  }
}

export default NextPage;
