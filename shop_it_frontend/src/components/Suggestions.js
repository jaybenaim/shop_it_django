import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Api from "../apis/api";
class Suggestions extends Component {
  state = {
    show: "hide"
  };
  handleAddToList = () => {
    // todo:::
    //  show shopping list page
    //  pass in the item with the add to list fn

    Api.get(`shopping_list/`).then(res => {
      console.log(res.data);
    });
  };
  render() {
    const { showClass } = this.props;
    const { food_description: suggestion } = this.props.suggestion;
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
