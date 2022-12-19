import React, { Component } from "react";

import classes from "./Display.css";

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <div className="grid">{this.props.children}</div>
      </div>
    );
  }
}

export default Display;
