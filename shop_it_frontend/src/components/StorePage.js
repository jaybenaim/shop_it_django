import React, { Component } from "react";
import { Container, Col, Button, Row } from "react-bootstrap";
import StoreProducts from "./StoreProducts";

class StorePage extends Component {
  state = {
    showProducts: false
  };
  handleShowProducts = () => {
    const { showProducts } = this.state;
    this.setState({ showProducts: !showProducts });
  };

  render() {
    const { showProducts } = this.state;

    const { handleShowStore, name, address } = this.props;
    return (
      <>
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
                </Col>
                <Col>
                  <strong>Categories</strong>
                </Col>
                <Col>
                  <strong onClick={this.handleShowProducts}>Products</strong>
                </Col>
              </Row>
              <Row>
                <Col>get aisles</Col>
                <Col>get categories</Col>
                <Col>get products</Col>
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
