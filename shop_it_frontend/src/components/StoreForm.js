import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Api from "../apis/api";

class StoreForm extends Component {
  state = {};
  nameRef = React.createRef();
  addressRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const { handleShowForm } = this.props;
    let name = this.nameRef.current.value;
    let address = this.addressRef.current.value;

    let data = {
      name,
      address,
      user: localStorage.id
    };
    Api.post("stores/", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${window.localStorage.token}`
      }
    })
      .then(res => {
        handleShowForm();
        console.log(res.statusText);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { handleShowForm } = this.props;
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Add A Store</Modal.Title>
        </Modal.Header>

        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Store Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Store Name"
              ref={this.nameRef}
            />
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="address"
              placeholder="Example Road, Toronto, Ontario"
              ref={this.addressRef}
            />
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleShowForm}>
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

export default StoreForm;
