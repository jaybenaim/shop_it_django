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
      .then(res => {
        const { id } = res.data;
        this.addAislesToStore(id);
      })
      .catch(err => {
        alert(err);
      });
  };

  addAislesToStore = aisleId => {
    const aisleNumber = this.numberRef.current.value;
    const { id, name, address } = this.props;
    const { aisles } = this.state;

    let data = aisles.map(aisle => {
      return aisle;
    });
    data.push(Number(aisleId));
    console.log(data);
    Api.patch(
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
    const { getStores, handleShowStore } = this.props;
    getStores();
    this.showAisles();
  };
  showAisles = () => {
    const { aisles } = this.state;
    const { getStores } = this.props;
    console.log(aisles); // get right aisles
    return aisles.map((aisle, i) => {
      return <Aisle key={i} aisle={aisle} getStores={getStores}></Aisle>;
    });
  };
  componentDidUpdate() {
    this.showAisles();
  }
  render() {
    const { showProducts, showAisleForm, aisles } = this.state;
    const { handleShowStore, name, address } = this.props;

    return (
      <>
        {showAisleForm && (
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Add an Aisle</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Aisle Number</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Aisle Number"
                    ref={this.numberRef}
                  />
                </Form.Group>
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
                  <Button
                    variant="outline-primary"
                    onClick={this.handleAddAisle}
                  >
                    Add Aisle
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>{aisles && this.showAisles()}</Col>

                {/* <Col>
                  <strong onClick={this.handleShowProducts}>Products</strong>
                </Col> */}
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
