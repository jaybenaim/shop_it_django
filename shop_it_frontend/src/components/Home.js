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
            <h1>Welcome To Shop It</h1>
          </Row>
          <Row>
            <a href="/shop_it_django/">
              <Col className="home-image-container">
                <div className="home-image-cart"></div>
              </Col>
            </a>
          </Row>
          <div className="home-content">
            <Row>
              <Col>
                <a href="stores">
                  <div className="home-store-image-container">
                    <span className="home-store-label">View Stores </span>
                  </div>{" "}
                </a>
              </Col>
              <Col>
                <a href="shopping_list">
                  <div className="home-list-image-container">
                    <span className="home-list-label">View Shopping Lists</span>
                  </div>
                </a>
              </Col>
              <Col>
                <div className="home-search-box-container">
                  <div className="home-search-icon">
                    <span className="search-icon-label">
                      Search for a product
                    </span>
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default Home;
