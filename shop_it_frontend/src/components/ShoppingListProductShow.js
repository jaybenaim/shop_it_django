import React, { Component } from "react";
class ShoppingListProductShow extends Component {
  state = {};
  render() {
    const { currentProducts } = this.props;
    const { name, price } = currentProducts;
    return (
      <div>
        <div className="product-name">
          <h2>{name.toUpperCase()}</h2>
          <p>$ {price}</p>
        </div>
        <span className="add-to-cart-button">
          <label htmlFor="added">Added to Cart</label>&nbsp;
          <input type="checkbox" value="added" />
        </span>
        <hr />
      </div>
    );
  }
}

export default ShoppingListProductShow;
