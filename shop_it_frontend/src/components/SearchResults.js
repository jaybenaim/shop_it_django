import React, { Component } from "react";
class SearchResults extends Component {
  state = {
    show: "hide"
  };
  render() {
    const { showClass } = this.props;
    return <li className={showClass}>{result}</li>;
  }
}

export default SearchResults;
