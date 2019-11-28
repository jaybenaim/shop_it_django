import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Container fluid={true}>
          <div className="home-container"></div>
          <Row>
            <div className="welcome-header"></div>
          </Row>
          <Row>
            <Col className="home-image-container">
              <a href="/shop_it_django/">
                <div className="home-image-cart"></div>
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/stores">
                <span className="home-store-label">View Stores </span>
                <div className="home-store-image-container"></div>{" "}
              </Link>
            </Col>
            <Col>
              <Link to="/shopping_list">
                <span className="home-list-label">View Shopping Lists</span>
                <div className="home-list-image-container"></div>
              </Link>
            </Col>
            <Col>
              <div className="home-search-box-container">
                <span className="home-search-label">Search</span>
                <Link to="/search" className="home-search-icon">
                  <span className="search-icon-label">
                    Search for a product
                  </span>
                  <i className="fa fa-search"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
