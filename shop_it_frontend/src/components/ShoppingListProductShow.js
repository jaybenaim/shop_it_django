import React, { Component } from "react";
class ShoppingListProductShow extends Component {
  state = {};
  render() {
    const { currentProducts } = this.props;
    const { name, price, description, ingredients } = currentProducts;
    return (
      <div>
        <h2>{name.toUpperCase()}</h2>
        <p>$ {price}</p>
        <p>{description}</p>
        <p>{ingredients}</p>
      </div>
    );
  }
}

export default ShoppingListProductShow;
