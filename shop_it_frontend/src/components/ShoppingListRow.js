import React, { Component } from "react";

class ShoppingListRow extends Component {
  state = {};

  render() {
    const { shoppingList, handleShowShoppingList } = this.props;
    const { name, budget, products } = shoppingList;

    return (
      <tr>
        <td>
          <p onClick={() => handleShowShoppingList(shoppingList, products)}>
            {name}
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
