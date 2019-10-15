import React, { Component } from "react";
import ShoppingListProducts from "./ShoppingListProducts";
import AddProductForm from "./AddProductForm";
import { Table } from "react-bootstrap";
import Api from "../apis/api";
class ShoppingListShow extends Component {
  state = {
    showProductForm: false,
    currentTotal: this.props.currentShoppingList.budget,
    isLoaded: false,
    products: []
  };

  getProducts = () => {
    const { isLoaded } = this.state;
    const { currentProducts: productIds, updateTotal } = this.props;
    const list = [];

    productIds.forEach(id => {
      Api.get(`products/${id}/`).then(res => {
        const { products } = this.state;
        this.setState({ products: [...products, res.data] });
      });
    });

    this.setState({ isLoaded: true });
  };
  handleAddProduct = () => {
    const { isLoaded } = this.state;
    this.handleShowProductForm();
    // this.setState({ isLoaded: !isLoaded });
  };
  handleShowProductForm = () => {
    const { showProductForm } = this.state;
    this.setState({ showProductForm: !showProductForm });
  };
  updateTotal = total => {
    this.setState({
      currentTotal: total
    });
  };
  render() {
    const { showProductForm, currentTotal, isLoaded } = this.state;
    const {
      currentShoppingList: shoppingList,
      currentProducts,
      getShoppingLists
    } = this.props;
    const { name, budget: initialBudget, products } = shoppingList;
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Shopping List</th>
              <th>Initial Budget </th>
              <th>Current Total </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>{name}</strong>{" "}
              </td>
              <td>$ {initialBudget}</td>
              <td>$ {currentTotal}</td>
            </tr>
            <tr>
              <th colSpan="2" className="items-label">
                Items
                <span
                  className="add-item-button"
                  onClick={this.handleAddProduct}
                >
                  Add Product
                </span>
              </th>
            </tr>
            <tr>
              {products.length >= 1 && !isLoaded && (
                <td>
                  <ShoppingListProducts
                    budget={currentTotal}
                    currentProducts={currentProducts}
                    products={products}
                    updateTotal={this.updateTotal}
                  />
                </td>
              )}
            </tr>
          </tbody>
        </Table>
        {showProductForm && (
          <AddProductForm
            getShoppingLists={getShoppingLists}
            getProducts={this.getProducts}
            handleShowProductForm={this.handleShowProductForm}
            handleAddProduct={this.handleAddProduct}
            shoppingList={shoppingList}
          />
        )}
      </>
    );
  }
}

export default ShoppingListShow;
