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
      this.goBack(true);
    });
  };
  goBack = showForm => {
    const { handleShowShoppingListForm, getShoppingLists } = this.props;
    !showForm && handleShowShoppingListForm();
    getShoppingLists();
  };

  render() {
    console.log(localStorage.id);
    return (
      <Form className="new-list-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="list-name-label">Name of List</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            ref={this.nameRef}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="list-budget-label">Budget</Form.Label>
          <Form.Control
            className="budget-input"
            type="number"
            placeholder="Enter your budget"
            ref={this.budgetRef}
          />
        </Form.Group>
        <Button variant="outline-primary" onClick={() => this.goBack()}>
          Back
        </Button>
        <Button
          className="new-list-submit"
          variant="outline-primary"
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default ShoppingListForm;
