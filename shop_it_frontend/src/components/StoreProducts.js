import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class StoreProducts extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Link to="/stores">Back</Link>
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
