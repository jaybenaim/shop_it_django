import React from "react";
import { Row } from "react-bootstrap";

class Aisle extends React.Component {
  state = {};

  render() {
    const { aisle } = this.props;
    return <Row>{aisle}</Row>;
  }
}

export default Aisle;
