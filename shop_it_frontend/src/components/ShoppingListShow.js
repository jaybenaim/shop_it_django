import React, { Component } from "react";
import ShoppingListProducts from "./ShoppingListProducts";
import AddProductForm from "./AddProductForm";
import { Table } from "react-bootstrap";
class ShoppingListShow extends Component {
  state = {
    modalShow: false,
    currentTotal: this.props.currentShoppingList.budget,
    isLoaded: false
  };
  handleAddProduct = () => {
    const { isLoaded, modalShow } = this.state;
    this.setState({ isLoaded: !isLoaded, modalShow: !modalShow });
  };

  updateTotal = total => {
    this.setState({
      currentTotal: total
    });
  };
  render() {
    const { modalShow, currentTotal } = this.state;
    const { currentShoppingList: shoppingList, currentProducts } = this.props;
    const { id, budget: initialBudget, products } = shoppingList;

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
              <td>Shopping List {id}</td>
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
              {products.length >= 1 && (
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
        {modalShow && (
          <AddProductForm
            modalShow={modalShow}
            handleAddProduct={this.handleAddProduct}
            shoppingList={shoppingList}
          />
        )}
      </>
    );
  }
}

export default ShoppingListShow;
