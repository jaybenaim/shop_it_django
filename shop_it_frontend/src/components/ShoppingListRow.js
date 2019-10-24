import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Api from "../apis/api";

class ShoppingListRow extends Component {
  formatDate = date => {
    const months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    };
    const days = {
      1: "st",
      2: "nd",
      3: "rd",
      4: "th",
      5: "th",
      6: "th",
      7: "th",
      8: "th",
      9: "th",
      0: "th"
    };

    date = date.split("-");
    let day = date.pop(-1);
    let month = date.pop(-1);
    month = months[month];
    if (day >= 10) {
      day = day + days[day[1]];
    } else {
      day = day + days[day];
    }

    let fullDate = month + "  " + day;

    return fullDate;
  };
  destroyShoppingList = () => {
    const { id } = this.props.shoppingList;
    const { getShoppingLists } = this.props;
    Api.delete(`shopping_list/${id}/`, {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Token ${localStorage.token}`
      }
    })
      .then(res => {
        console.log("Shopping List Deleted");
        getShoppingLists();
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { shoppingList, handleShowShoppingList } = this.props;
    const { name, budget, products, date } = shoppingList;

    return (
      <tr>
        <td>
          <p
            className="list-name"
            onClick={() => handleShowShoppingList(shoppingList, products)}
          >
            {name}
            <br />
          </p>
          <Button
            className="delete-list-button"
            variant="outline-danger"
            onClick={this.destroyShoppingList}
          >
            <span>X</span>
          </Button>
          <span className="list-date"> {this.formatDate(date)}</span>
        </td>

        <td>
          $ {budget}
          <br />
          <span></span>
        </td>

        <td>
          <ul>{products.length}</ul>
        </td>
      </tr>
    );
  }
}

export default ShoppingListRow;
