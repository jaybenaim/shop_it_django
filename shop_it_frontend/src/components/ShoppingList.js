import React, { Component } from "react";
import { Table } from "react-bootstrap";
import ShoppingListRow from "./ShoppingListRow";

class ShoppingList extends Component {
  state = {
    shoppingList: []
  };

  render() {
    const {
      shoppingLists,
      handleShowShoppingList,
      products,
      getShoppingLists,
      currentTotal,
      updateTotal
    } = this.props;
    const shoppingListElements = shoppingLists.map((shoppingList, i) => {
      return (
        <ShoppingListRow
          key={i}
          shoppingList={shoppingList}
          products={products}
          handleShowShoppingList={handleShowShoppingList}
          getShoppingLists={getShoppingLists}
          currentTotal={currentTotal}
          updateTotal={updateTotal}
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
