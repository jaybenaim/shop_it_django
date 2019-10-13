import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
class Store extends Component {
  state = {};
  // get stores for user

  render() {
    return (
      <Container>
        <Row>
          <Col> </Col>
          <Col>
            <h2>My Stores</h2>
          </Col>
          <Col> </Col>
        </Row>
        <Row>
          <Col>Store Logo</Col>
          <Col>Store Name</Col>
          <Col>Store Address</Col>
        </Row>
        <Row>
          <Col> </Col>
          <Col> </Col>
          <Col> </Col>
        </Row>
      </Container>
    );
  }
}

export default Store;
