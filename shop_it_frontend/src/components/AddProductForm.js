import React, { Component } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import Api from "../apis/api";

class AddProductForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  descriptionRef = React.createRef();
  ingredientsRef = React.createRef();

  state = {
    productId: null,
    isLoaded: false
  };
  /// Item form searches through api products to display suggestions
  /// POST create product
  /// PATCH then add item to list

  addProduct = () => {
    const name = this.nameRef.current.value;
    const price = this.priceRef.current.value;
    const description = this.descriptionRef.current.value;
    const ingredients = this.ingredientsRef.current.value;

    const { isLoaded } = this.state;
    const data = { name, price, description, ingredients };

    Api.post("products/", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.token}`
      }
    })
      .then(res => {
        console.log(res.statusText);
        const { id } = res.data[0].id;
        this.setState({ productId: id, isLoaded: !isLoaded });
      })
      .catch(err => {
        console.log("Error: " + err);
      });
  };
  addProductToList = () => {
    const { id } = this.state.productId;
    const data = {
      products: [id]
    };
    Api.patch(`shopping_list/${id}/`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.token}`
      }
    });
  };
  handleSubmit = () => {
    const { isLoaded } = this.state;
    this.addProduct();
    isLoaded && this.addProductToList();
  };
  render() {
    const { modalShow, shoppingList, handleAddProduct } = this.props;
    const { id, budget, products } = shoppingList;

    return (
      <Modal.Dialog show={modalShow.toString()}>
        <Modal.Header>
          <Modal.Title>Add a product to shopping list {id}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Name"
                  ref={this.nameRef}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="5.00"
                  ref={this.priceRef}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group as={Row} controlId="exampleForm.ControlDescription">
              <Form.Label className="form-description">Description</Form.Label>
              <Form.Control
                className="form-description"
                as="textarea"
                rows="3"
                ref={this.descriptionRef}
              />
            </Form.Group>

            <Form.Group as={Row} controlId="exampleForm.ControlIngredients">
              <Form.Label className="form-ingredients">Ingredients</Form.Label>
              <Form.Control
                className="form-ingredients"
                as="textarea"
                rows="3"
                ref={this.ingredientsRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddProduct}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default AddProductForm;
