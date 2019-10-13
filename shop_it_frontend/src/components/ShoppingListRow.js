import React, { Component } from "react";
import ShoppingListProducts from "./ShoppingListProducts";

class ShoppingListRow extends Component {
  state = {};

  render() {
    const { href } = this.state;
    const { shoppingList, handleShowShoppingList } = this.props;
    const { id, budget, user, products } = shoppingList;
    const username = localStorage.username;
    // const productElements = products.map((product, i) => {
    //   return <ShoppingListProducts key={i} productId={product} />;
    // });

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
