import React, { Component } from "react";
import { Table } from "react-bootstrap";
class ShoppingList extends Component {
  state = {
    shoppingList: [],
    href: `shopping_list/${this.props.shoppingList[0].id}/`
  };

  componentDidUpdate() {
    const { shoppingList } = this.props;
    console.log(shoppingList[0].budget);
  }

  render() {
    const { href } = this.state;
    const { shoppingList } = this.props;
    const { id, budget, user, product } = shoppingList[0];
    const username = localStorage.username;
    console.log(username);

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Budget</th>
            <th>Products</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href={href}>Shopping List {id} </a>
            </td>
            <td>{budget}</td>
            <td>{product}</td>
            <td>{username}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ShoppingList;
