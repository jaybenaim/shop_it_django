import React, { Component } from "react";
import Api from "../apis/api";
class Category extends Component {
  state = { name: "", isLoaded: false };
  getCategoryName = () => {
    const { category } = this.props;
    const { isLoaded } = this.state;
    Api.get(`categories/${category}/`).then(res => {
      const { name } = res.data;
      this.setState({ name, isLoaded: !isLoaded });
    });
  };

  componentDidMount() {
    this.getCategoryName();
  }
  render() {
    const { category } = this.props;
    const { name, isLoaded } = this.state;
    return <div>{isLoaded ? name.toUpperCase() : " . . ."}</div>;
  }
}

export default Category;
