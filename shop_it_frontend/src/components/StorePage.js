import React, { Component } from "react";
import { Button } from "react-bootstrap";
class StorePage extends Component {
  state = {};
  render() {
    const { handleShowStore } = this.props;
    return (
      <div>
        <Button variant="outline-primary" onClick={() => handleShowStore()}>
          Back
        </Button>{" "}
      </div>
    );
  }
}

export default StorePage;
