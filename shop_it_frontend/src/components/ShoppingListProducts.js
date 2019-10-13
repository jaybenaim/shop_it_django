import React, { Component } from "react";
import Api from "../apis/api";
import ShoppingListProductsShow from "./ShoppingListProductShow";

class ShoppingListProducts extends Component {
  state = {
    productList: [{ name: null }],
    isLoaded: false
  };

  getProducts = () => {
    const { productList, isLoaded } = this.state;
    const { products: productIds } = this.props;

    let p = productIds.map(id => {
      Api.get(`products/${id}/`)
        .then(res => {
          console.log(res.data);
          this.setState({ productList: [...productList, { ...p }] });
        })
        .then(res => {
          console.log(p);
        });
    });

    // products.forEach(id => {
    //   Api.get(`products/${id}/`).then(res => {
    //     console.log(res.data);
    //     let product = res.data;
    //     this.setState(prevState => ({
    //       productList: [...productList, product]
    //     }));
    //   });
    // .then(res => {
    //   this.setState({ isLoaded: !isLoaded });
    // });
    // });
    // this.setState({ productList: p });
  };
  handleViewProduct = () => {
    const { currentProducts } = this.state;
    return currentProducts;
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    // const { productList, isLoaded } = this.state;

    // let productElements = productList.map(
    //   (product, i) =>
    //     !isLoaded && (
    //       <ShoppingListProductsShow key={i} currentProducts={product} />
    //     )
    // );

    return (
      <div className="shopping-list-products">
        {/* <div onClick={this.handleViewProduct}>{productElements}</div> */}
      </div>
    );
  }
}

export default ShoppingListProducts;
