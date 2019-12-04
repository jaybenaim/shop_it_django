import React, { Component } from "react";
import { Container, Col, Button, Row, Form, Modal } from "react-bootstrap";
import StoreProducts from "./StoreProducts";
import Api from "../apis/api";
import Aisle from "./Aisle";

class StorePage extends Component {
  state = {
    showProducts: false,
    showAisleForm: false,
    aisles: this.props.aisles || []
  };

  handleShowProducts = () => {
    const { showProducts } = this.state;
    this.setState({ showProducts: !showProducts });
  };

  handleAddAisle = () => {
    const { showAisleForm } = this.state;
    this.setState({ showAisleForm: !showAisleForm });
  };

  numberRef = React.createRef();
  submitAisleForm = () => {
    let aisleNumber = this.numberRef.current.value;
    Api.post(
      `aisles/`,
      {
        number: aisleNumber
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.token}`
        }
      }
    )
      .then(() => {
        this.addAislesToStore();
      })
      .catch(err => {
        alert(err);
      });
  };

  addAislesToStore = () => {
    const aisleNumber = this.numberRef.current.value;
    const { id, name, address } = this.props;
    const { aisles } = this.state;

    let data = [];
    aisles.forEach(aisle => {
      data.push(aisle);
    });
    data.push(Number(aisleNumber));
    console.log(data);
    Api.put(
      `stores/${id}/`,
      { aisles: data, name, address },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.token}`
        }
      }
    )
      .then(res => {
        this.getAisles();
      })
      .catch(err => {
        alert(err);
      });
  };
  getAisles = () => {
    const { getStores } = this.props;
    getStores();
  };
  showAisles = () => {
    const { aisles } = this.state;
    return aisles.map((aisle, i) => {
      return <Aisle key={i} aisle={aisle}></Aisle>;
    });
  };

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
                <Col>{aisles && this.showAisles()}</Col>

                {/* <Col>
                  <strong onClick={this.handleShowProducts}>Products</strong>
                </Col> */}
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
