import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Api from "../apis/api";
class Suggestions extends Component {
  state = {
    show: "hide",
    category: ""
  };
  handleAddToList = () => {
    // todo:::
    //  show shopping list page
    //  pass in the item with the add to list fn

    Api.get(`shopping_list/`).then(res => {
      console.log(res.data);
    });
  };
  // getCategoryFromItem = () => {
  //   const { food_description: suggestion } = this.props.suggestion;

  //   let qReg = /[raw]/gi;
  //   let poultry = /[chicken]/gi;
  //   let soup = /[soup]/gi;
  //   if (suggestion.match(qReg) || suggestion.match(poultry)) {
  //     this.setState({
  //       category: "poultry"
  //     });
  //   } else if (suggestion.match(soup)) {
  //     this.setState({ category: "soup" });
  //   }
  // };

  render() {
    const { suggestion, showClass } = this.props;
    return (
      <li className={showClass}>
        {suggestion}
        <Button
          variant="outline-primary"
          className="add-suggestion-to-cart"
          onClick={() => this.handleAddToList()}
        >
          Add To List
        </Button>
      </li>
    );
  }
}

export default Suggestions;
