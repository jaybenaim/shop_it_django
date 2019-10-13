import React, { Component } from "react";

class ShoppingListRow extends Component {
  state = {};

  render() {
    const { shoppingList, handleShowShoppingList } = this.props;
    const { id, budget, products } = shoppingList;

    return (
      <tr>
        <td>
          <p onClick={() => handleShowShoppingList(shoppingList, products)}>
            Shopping List {id}{" "}
          </p>
        </td>
        <td>$ {budget}</td>
        <td>
          <ul>{products.length}</ul>
        </td>
      </tr>
    );
  }
}

export default ShoppingListRow;
