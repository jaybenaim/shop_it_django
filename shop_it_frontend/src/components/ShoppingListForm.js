import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Api from "../apis/api";
import axios from "axios";

class ShoppingListForm extends Component {
  state = {};
  budgetRef = React.createRef();
  nameRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    let name = this.nameRef.current.value;
    let budget = this.budgetRef.current.value;
    let user = localStorage.id;
    console.log(user + typeof user + budget + typeof budget);
    axios
      .post(
        "http://localhost:8000/api/shopping_list/",
        { budget, user: Number(user) },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${window.localStorage.token}`
          }
        }
      )
      .then(res => {
        console.log(res.statusText);
      });
  };

  render() {
    console.log(localStorage.id);
    const { handleShowShopppingList } = this.props;
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

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default ShoppingListForm;
