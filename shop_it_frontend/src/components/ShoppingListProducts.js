import React, { Component } from "react";
import Api from "../apis/api";

class ShoppingListProducts extends Component {
  state = {
    product: []
  };
  getProductFromId = () => {
    const { productId } = this.props;
    Api.get(`products/${productId}/`).then(res => {
      this.setState({ product: res.data });
    });
  };
  handleViewProduct = () => {
    const { product } = this.state.product;
    return product;
  };

  componentDidMount() {
    this.getProductFromId();
  }
  render() {
    const { name } = this.state.product;
    return (
      <li className="shopping-list-products">
        <p onClick={this.handleViewProduct}>{name}</p>
      </li>
    );
  }
}

export default ShoppingListProducts;
