import React, { Component } from "react";
import { Table } from "react-bootstrap";
import ShoppingListRow from "./ShoppingListRow";

class ShoppingList extends Component {
  state = {
    shoppingList: []
  };

  componentDidUpdate() {}

  render() {
    const {
      shoppingLists,
      handleShowShoppingList,
      products,
      getShoppingLists
    } = this.props;
    const shoppingListElements = shoppingLists.map((shoppingList, i) => {
      return (
        <ShoppingListRow
          key={i}
          shoppingList={shoppingList}
          //   productsLength={currentProductsLength}
          products={products}
          handleShowShoppingList={handleShowShoppingList}
          getShoppingLists={getShoppingLists}
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
