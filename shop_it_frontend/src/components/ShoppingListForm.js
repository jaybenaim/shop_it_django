import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Api from "../apis/api";

class ShoppingListForm extends Component {
  state = {};
  budgetRef = React.createRef();
  nameRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    let name = this.nameRef.current.value;
    let budget = this.budgetRef.current.value;
    let user = localStorage.id;
    const { handleShowShoppingListForm, getShoppingLists } = this.props;
    Api.post(
      "shopping_list/",
      { budget, user: Number(user), name },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${window.localStorage.token}`
        }
      }
    ).then(res => {
      handleShowShoppingListForm();
      getShoppingLists();
      console.log(res.statusText);
    });
  };
  goBack = () => {
    const { handleShowShoppingListForm, getShoppingLists } = this.props;

    handleShowShoppingListForm();
    getShoppingLists();
  };

  render() {
    console.log(localStorage.id);
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name of List</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            ref={this.nameRef}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Budget</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your budget"
            ref={this.budgetRef}
          />
        </Form.Group>
        <Button onClick={() => this.goBack()}>Back</Button>
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default ShoppingListForm;
