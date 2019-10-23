import React, { Component } from "react";
class Suggestions extends Component {
  state = {
    show: "hide"
  };
  render() {
    const { showClass } = this.props;
    const { food_description: suggestion } = this.props.suggestion;
    return <li className={showClass}>{suggestion}</li>;
  }
}

export default Suggestions;
