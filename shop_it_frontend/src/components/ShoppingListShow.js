import React, { Component } from "react";
import ShoppingListProducts from "./ShoppingListProducts";
import AddProductForm from "./AddProductForm";
import { Table } from "react-bootstrap";
class ShoppingListShow extends Component {
  state = {
    modalShow: false,
    isLoaded: false
  };
  handleAddProduct = () => {
    const { isLoaded, modalShow } = this.state;
    this.setState({ isLoaded: !isLoaded, modalShow: !modalShow });
  };

  render() {
    const { modalShow } = this.state;
    const { currentShoppingList: shoppingList } = this.props;
    const { id, budget, products } = shoppingList;

    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Shopping List</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shopping List {id}</td>
              <td>{budget}</td>
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
              <td>
                <ShoppingListProducts products={products} />
              </td>
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
