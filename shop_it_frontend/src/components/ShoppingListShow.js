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
    products: [],
    totalClass: null
  };

  getClass = () => {
    let { currentTotal } = this.state;
    currentTotal = Number(currentTotal);

    if (
      (currentTotal >= 1 && currentTotal <= 14 && currentTotal >= 0) ||
      currentTotal <= 0
    ) {
      return "danger";
    } else if (currentTotal >= 15 && currentTotal <= 30) {
      return "warning";
    } else {
      return "normal";
    }
  };
  getProducts = () => {
    const { currentProducts: productIds } = this.props;
    const { isLoaded } = this.state;
    productIds.forEach(id => {
      Api.get(`products/${id}/`).then(res => {
        const { products } = this.state;
        this.setState({
          products: [...products, res.data],
          isLoaded: !isLoaded
        });
      });
    });
    this.setState({ isLoaded: !isLoaded });
  };
  handleAddProduct = () => {
    const { getShoppingLists } = this.props;
    this.handleShowProductForm();
    getShoppingLists();
    this.getProducts();
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

  componentDidUpdate() {
    // this.setState({ totalClass: this.getClass() });
    // this.state["totalClass"] = this.getClass();
  }
  render() {
    const { showProductForm, currentTotal, isLoaded, totalClass } = this.state;
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
              <td className={totalClass}>$ {currentTotal}</td>
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
            {products.length >= 1 && !isLoaded && (
              <tr>
                <ShoppingListProducts
                  total={currentTotal}
                  currentProducts={currentProducts}
                  products={products}
                  updateTotal={this.updateTotal}
                />
              </tr>
            )}
          </tbody>
        </Table>

        {showProductForm && (
          <AddProductForm
            getShoppingLists={getShoppingLists}
            getProducts={this.getProducts}
            handleShowProductForm={this.handleShowProductForm}
            handleAddProduct={this.handleAddProduct}
            shoppingList={shoppingList}
            updateTotal={this.updateTotal}
          />
        )}
      </>
    );
  }
}

export default ShoppingListShow;
