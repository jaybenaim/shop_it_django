import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class StoreProducts extends Component {
  state = {};
  render() {
    const { handleShowProducts } = this.props;
    return (
      <Container>
        <Button variant="outline-primary" onClick={handleShowProducts}>
          Back
        </Button>
        <Row>
          <Col>
            <h1>Products</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StoreProducts;
