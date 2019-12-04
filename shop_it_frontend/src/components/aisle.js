import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Api from "../apis/api";
import Category from "./Category";
class Aisle extends React.Component {
  state = {
    categories: []
  };
  getCategories = () => {
    const { aisle } = this.props;
    Api.get(`aisles/${aisle}/`).then(res => {
      const { categories } = res.data;
      let currentCategories = categories.map(category => {
        return category;
      });
      this.setState({ categories: currentCategories });
    });
  };
  showCategories = () => {
    const { categories } = this.state;
    return categories.map((category, i) => {
      return <Category key={i} category={category}></Category>;
    });
  };

  componentDidMount() {
    this.getCategories();
  }
  render() {
    const { aisle } = this.props;
    return (
      <Row className="center">
        <Col>
          <div className="aisle-container">
            <strong>Aisle - {aisle}</strong>
            {this.showCategories()}
            <Button
              variant="outline-primary"
              onClick={this.handleAddCategory()}
            >
              Add Category
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Aisle;
