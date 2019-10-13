import React, { Component } from "react";
import Api from "../apis/api";
import ShoppingListProductsShow from "./ShoppingListProductShow";

class ShoppingListProducts extends Component {
  state = {
    productList: [],
    isLoaded: false
  };

  getProducts = () => {
    const { products: productIds } = this.props;
    const list = [];
    productIds.forEach(id => {
      Api.get(`products/${id}/`)
        .then(res => {
          list.push(res.data);
        })
        .then(res => {
          this.setState({ productList: list });
        });
    });
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const { productList, isLoaded } = this.state;

    let productElements = productList.map(
      (product, i) =>
        !isLoaded && (
          <ShoppingListProductsShow key={i} currentProducts={product} />
        )
    );

    return (
      <div className="shopping-list-products">
        <div>{productElements}</div>
      </div>
    );
  }
}

export default ShoppingListProducts;
