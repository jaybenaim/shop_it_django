import React, { Component } from "react";
import Api from "../apis/api";
import axios from "axios";
import ShoppingListForm from "./ShoppingListForm";
import { Container, Button, Row, Col } from "react-bootstrap";
import ShoppingList from "./ShoppingList";

class ShoppingListPage extends Component {
  state = {
    shoppingList: [],
    showShoppingListForm: false,
    loading: true
  };

  getUserShoppingList = () => {
    Api.get("shopping_list/").then(res => {
      const lists = res.data;
      const id = localStorage.id;
      let userShoppingList = lists.filter(list => {
        if (list.user === Number(id)) {
          return list;
        }
        return;
      });
      this.setState({
        shoppingList: userShoppingList,
        loading: false
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
    const { showShoppingListForm, shoppingList, loading } = this.state;

    return (
      <>
        <div>
          {showShoppingListForm ? (
            <ShoppingListForm
              handleShowShoppingList={this.handleShowShoppingList}
            />
          ) : (
            <Container className="shopping-list-container">
              <Row>
                <h2>Your Shopping Lists</h2>
                <Col xs={12} md={12} lg={6}></Col>
                <Col xs={12} md={12} lg={6}>
                  {!loading && <ShoppingList shoppingList={shoppingList} />}
                </Col>
                <Col xs={12} md={12} lg={6}></Col>
              </Row>

              <Button onClick={this.handleShowShoppingList}>
                Click to add a shopping list
              </Button>
            </Container>
          )}
        </div>
      </>
    );
  }
}

export default ShoppingListPage;
