import React, { Component } from "react";
import Api from "../apis/api";
import ShoppingListProductsShow from "./ShoppingListProductShow";

class ShoppingListProducts extends Component {
  state = {
    productList: [],
    total: Number(this.props.total),
    isLoaded: false
  };

  getProducts = () => {
    const { products: productIds, updateTotal } = this.props;
    const list = [];

    productIds.forEach(id => {
      Api.get(`products/${id}/`)
        .then(res => {
          list.push(res.data);

          this.setState(prevState => {
            return {
              total: Math.round((prevState.total - res.data.price) * 100) / 100
            };
          });
        })
        .then(res => {
          this.setState({
            productList: list
          });
          updateTotal(this.state.total);
        });
    });
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const { productList, isLoaded, total } = this.state;
    const {
      products,
      shoppingList,
      getProducts,
      handleShowProductForm,
      getShoppingLists
    } = this.props;
    let productElements = productList.map(
      (product, i) =>
        !isLoaded && (
          <ShoppingListProductsShow
            key={i}
            currentProducts={product}
            total={total}
            productIds={products}
            shoppingList={shoppingList}
            getProducts={getProducts}
            // handleShowProductForm={handleShowProductForm}
            getShoppingLists={getShoppingLists}
          />
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
