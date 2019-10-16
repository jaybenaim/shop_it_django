import React, { Component } from "react";
import Api from "../apis/api";
import { Button } from "react-bootstrap";

class ShoppingListProductShow extends Component {
  destroyItem = ID => {
    let { productIds, shoppingList } = this.props;
    const { id } = shoppingList;
    console.log(productIds);
    let updatedList = productIds.filter((productId, i) => {
      console.log(productId + " - " + ID);
      if (productId !== ID) {
        return productId;
      } else {
        return null;
      }
    });
    let data = {
      products: updatedList
    };
    console.log(updatedList);
    Api.patch(`shopping_list/${id}/`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.token}`
      }
    })
      .then(() => {
        const {
          getProducts,
          handleShowProductForm,
          getShoppingLists
        } = this.props;
        getShoppingLists();
        getProducts();
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { currentProducts } = this.props;
    const { name, price, description, ingredients, id } = currentProducts;
    return (
      <div>
        <h2>{name.toUpperCase()}</h2>
        <p>$ {price}</p>
        <p>Description: {description}</p>
        <p>Ingredients: {ingredients}</p>
        <Button variant="outline-danger" onClick={() => this.destroyItem(id)}>
          X
        </Button>
      </div>
    );
  }
}

export default ShoppingListProductShow;
