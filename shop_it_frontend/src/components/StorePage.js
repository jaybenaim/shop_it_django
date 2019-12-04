import React, { Component } from "react";
import { Container, Col, Button, Row, Form, Modal } from "react-bootstrap";
import StoreProducts from "./StoreProducts";
import Api from "../apis/api";
import Aisle from "./aisle";

class StorePage extends Component {
  state = {
    showProducts: false,
    showAisleForm: false,
    aisles: []
  };

  handleShowProducts = () => {
    const { showProducts } = this.state;
    this.setState({ showProducts: !showProducts });
  };

  handleAddAisle = () => {
    this.handleShowAisleForm();
  };
  handleShowAisleForm = () => {
    const { showAisleForm } = this.state;
    this.setState({ showAisleForm: !showAisleForm });
  };
  numberRef = React.createRef();
  submitAisleForm = () => {
    let aisleNumber = this.numberRef.current.value;
    Api.post(
      "aisles/",
      {
        number: aisleNumber
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.token}`
        }
      }
    ).then(() => {
      alert("Aisle Added");
    });
  };
  getAisles = () => {
    Api.get("aisles/").then(res => {
      const aisles = res.data;
      let aisleNumbers = aisles.map(aisle => {
        return aisle.number;
      });

      this.setState({ aisles: aisleNumbers });
    });
  };
  showAisles = () => {
    const { aisles } = this.state;
    return aisles.map((aisle, i) => {
      return <Aisle key={i} aisle={aisle}></Aisle>;
    });
  };
  componentDidMount() {
    this.getAisles();
  }
  render() {
    const { showProducts, showAisleForm, aisles } = this.state;
    const { handleShowStore, name, address } = this.props;

    return (
      <>
        {showAisleForm && (
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Aisle Number"
                    ref={this.numberRef}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleShowAisleForm}>
                Close
              </Button>
              <Button variant="primary" onClick={this.submitAisleForm}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        )}
        {!showProducts ? (
          <div>
            <Button variant="outline-primary" onClick={() => handleShowStore()}>
              Back
            </Button>
            <Container className="store-page-container">
              <Row>
                <Col>
                  <h1>{name}</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{address}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Aisles</strong>
                  {aisles && this.showAisles()}
                </Col>
                <Col>
                  <strong>Categories</strong>
                </Col>
                <Col>
                  <strong onClick={this.handleShowProducts}>Products</strong>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    variant="outline-primary"
                    onClick={this.handleAddAisle}
                  >
                    Add Aisle
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-primary">Add Category</Button>
                </Col>
                <Col>
                  <Button variant="outline-primary">Add Products</Button>
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          <>
            <StoreProducts handleShowProducts={this.handleShowProducts} />
          </>
        )}
      </>
    );
  }
}

export default StorePage;
