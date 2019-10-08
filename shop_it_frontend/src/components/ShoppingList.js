import React, { Component } from "react";
class ShoppingList extends Component {
  state = {
    shoppingList: [],
    href: `shopping_list/${this.props.shoppingList[0].id}`
  };

  componentDidUpdate() {
    const { shoppingList } = this.props;
    console.log(shoppingList[0].budget);
  }

  render() {
    const { href } = this.state;
    const { shoppingList } = this.props;
    const { id, budget, user, product } = shoppingList[0];

    return (
      <div>
        <a href={href}>Shopping List {id} </a>
      </div>
    );
  }
}

export default ShoppingList;
