import React, { Component } from "react";
import ShoppingListProducts from "./ShoppingListProducts";
import { Table } from "react-bootstrap";
import ShoppingListRow from "./ShoppingListRow";
class ShoppingListShow extends Component {
  state = {};
  render() {
    const {
      currentShoppingList: shoppingList,
      handleShowShoppingList,
      currentProducts
    } = this.props;
    const { id, budget, user, products } = shoppingList;
    const username = localStorage.username;

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Shopping List</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shopping List {id}</td>
            <td>{budget}</td>
          </tr>
          <tr>
            <th colSpan="2" className="items-label">
              Items
            </th>
          </tr>
          <tr>
            <td>
              <ShoppingListProducts products={products} />
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ShoppingListShow;
