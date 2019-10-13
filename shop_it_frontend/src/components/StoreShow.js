import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Api from "../apis/api";

class StoreShow extends Component {
  destroyStore = () => {
    const { id } = this.props;

    Api.delete(`stores/${id}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${window.localStorage.token}`
      }
    })
      .then(res => {
        console.log("OK");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const {
      id,
      name,
      address,
      aisles,
      handleShowStore,
      currentStore,
      selectedStore
    } = this.props;
    return (
      <Row>
        <Col className="store-address" onClick={() => handleShowStore(id)}>
          {address}
        </Col>
        <Col className="store-name" onClick={() => handleShowStore(id)}>
          {name}
        </Col>
        <Col className="store-aisles">{aisles.length}</Col>
        <Col className="store-aisles">4</Col>
        <Col className="store-aisles">4</Col>
        <Col className="delete-store">
          <Button variant="outline-danger" onClick={this.destroyStore}>
            X
          </Button>
        </Col>
      </Row>
    );
  }
}

export default StoreShow;
