import React, { Component } from "react";
import { Table } from "react-bootstrap";
import ShoppingListRow from "./ShoppingListRow";

class ShoppingList extends Component {
  state = {
    shoppingList: []
  };

  componentDidUpdate() {}

  render() {
    const { shoppingList, handleShowShoppingList, products } = this.props;
    const shoppingListElements = shoppingList.map((shopping_list, i) => {
      return (
        <ShoppingListRow
          key={i}
          shoppingList={shopping_list}
          //   productsLength={currentProductsLength}
          products={products}
          handleShowShoppingList={handleShowShoppingList}
        />
      );
    });
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Shopping List</th>
            <th>Budget</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>{shoppingListElements}</tbody>
      </Table>
    );
  }
}

export default ShoppingList;
