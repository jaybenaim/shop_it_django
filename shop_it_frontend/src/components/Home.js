import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as a } from "react-router-dom";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Container className="home-container">
          <Row>
            <div className="welcome-header">
              <h1>Welcome To Shop It</h1>
            </div>
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
              <a href="stores">
                <span className="home-store-label">View Stores </span>
                <div className="home-store-image-container"></div>{" "}
              </a>
            </Col>
            <Col>
              <a href="shopping_list">
                <span className="home-list-label">View Shopping Lists</span>
                <div className="home-list-image-container"></div>
              </a>
            </Col>
            <Col>
              <div className="home-search-box-container">
                <span className="home-search-label">Search</span>

                <div className="home-search-icon">
                  <span className="search-icon-label">
                    Search for a product
                  </span>
                  <i className="fa fa-search"></i>
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
