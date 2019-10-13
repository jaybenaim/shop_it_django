import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Api from "../apis/api";
import axios from "axios";
class Store extends Component {
  state = {};
  // get stores for user

  getStores = () => {
    axios.get("http://localhost:8000/api/stores/").then(res => {
      console.log(res.data);
    });
  };
  componentDidMount() {
    this.getStores();
  }
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
