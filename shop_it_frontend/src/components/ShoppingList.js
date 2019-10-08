import React, { Component } from "react";
import Api from "../apis/api";
import axios from "axios";
import ShoppingListForm from "./ShoppingListForm";

class ShoppingList extends Component {
  state = {
    shoppingList: [],
    showShoppingListForm: false
  };

  getUserShoppingList = () => {
    Api.get("shopping_list/").then(res => {
      console.log(res.data);
      const lists = res.data;
      const id = localStorage.id;
      let userShoppingList = lists.filter(list => {
        console.log(list.user + id);
        if (list.user === Number(id)) {
          return list;
        }
        return;
      });
      this.setState({
        shoppingList: userShoppingList
      });
    });
  };
  handleShowShoppingList = () => {
    const { showShoppingListForm } = this.state;
    this.setState({ showShoppingListForm: !showShoppingListForm });
  };
  componentDidMount() {
    this.getUserShoppingList();
  }
  render() {
    const { showShoppingListForm } = this.state;

    return (
      <>
        <div>
          {showShoppingListForm ? (
            <ShoppingListForm
              handleShowShoppingList={this.handleShowShoppingList}
            />
          ) : (
            <button onClick={this.handleShowShoppingList}>
              Click to add a shopping list
            </button>
          )}
        </div>
      </>
    );
  }
}

export default ShoppingList;
