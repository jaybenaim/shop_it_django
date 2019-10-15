import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Container fluid={true} className="home-container">
          <Row>
            <h1>Welcome To Shop It</h1>
          </Row>
          <Row>
            <Col lg={12} className="home-image-container">
              <div
                // src="../public/images/cart.jpg"
                // alt="Shopping cart image"
                className="home-image-cart"
              ></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/stores">
                <div className="home-store-image-container"> </div>{" "}
              </Link>
            </Col>
            <Col>
              <Link to="shoppingList/">
                <div className="home-list-image-container"></div>{" "}
              </Link>
            </Col>
            <Col>
              <div className="home-search-box-container">
                <div className="home-search-icon">
                  <span className="search-icon-label">
                    Search for a product
                  </span>
                  <i class="fa fa-search"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
