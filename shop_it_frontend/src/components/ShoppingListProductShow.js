import React, { Component } from "react";
class ShoppingListProductShow extends Component {
  state = {};
  render() {
    const { currentProducts } = this.props;
    const { name, price } = currentProducts;
    return (
      <div>
        <h2>{name.toUpperCase()}</h2>
        <p>$ {price}</p>
        <table>
          <td>
            <label htmlFor="added">Added to Cart</label>&nbsp;
            <input type="checkbox" value="added" />
          </td>
        </table>
      </div>
    );
  }
}

export default ShoppingListProductShow;
