import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <Link to="/shop_it_django/">
              <Col sm={12} md={12} lg={12} className="home-image-container">
                <div
                  // src="../public/images/cart.jpg"
                  // alt="Shopping cart image"
                  className="home-image-cart"
                ></div>
              </Col>
            </Link>
          </Row>
          <div className="home-content">
            <Row>
              <Col>
                <Link to="stores">
                  <div className="home-store-image-container">
                    <span className="home-store-label">View Stores </span>
                  </div>{" "}
                </Link>
              </Col>
              <Col>
                <Link to="shopping_list">
                  <div className="home-list-image-container">
                    <span className="home-list-label">View Shopping Lists</span>
                  </div>
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
          </div>
        </Container>
      </>
    );
  }
}

export default Home;
