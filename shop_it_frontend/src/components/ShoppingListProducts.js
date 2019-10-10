import React, { Component } from "react";
import Api from "../apis/api";
import ShoppingListProductsShow from "./ShoppingListProductShow";

class ShoppingListProducts extends Component {
  state = {
    currentProducts: [],
    isLoaded: false
  };
  getProductFromId = () => {
    const { products } = this.props;
    const { currentProducts, isLoaded } = this.state;
    products.forEach(productId => {
      Api.get(`products/${productId}/`).then(res => {
        this.setState({
          currentProducts: [...currentProducts, res.data]
        });
      });
    });
  };
  handleViewProduct = () => {
    const { currentProducts } = this.state;
    return currentProducts;
  };

  componentDidMount() {
    this.getProductFromId();
  }

  render() {
    const { currentProducts, isLoaded } = this.state;

    let productElements = currentProducts.map(
      (product, i) =>
        !isLoaded && (
          <ShoppingListProductsShow key={i} currentProducts={product} />
        )
    );

    return (
      <div className="shopping-list-products">
        <div onClick={this.handleViewProduct}>{productElements}</div>
      </div>
    );
  }
}

export default ShoppingListProducts;
