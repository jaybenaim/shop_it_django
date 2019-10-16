import React, { Component } from "react";
import Api from "../apis/api";
import ShoppingListForm from "./ShoppingListForm";
import { Container, Button, Row, Col } from "react-bootstrap";
import ShoppingList from "./ShoppingList";
import ShoppingListProductShow from "./ShoppingListProductShow";
import ShoppingListShow from "./ShoppingListShow";
class ShoppingListPage extends Component {
  state = {
    shoppingLists: null,
    showShoppingListForm: false,
    showShoppingListProduct: false,
    handleShowShoppingList: false,
    currentShoppingList: null,
    currentProducts: [],
    currentTotal: 0,
    isLoaded: false
  };
  updateTotal = total => {
    this.setState({
      currentTotal: total
    });
  };

  getShoppingLists = () => {
    Api.get("shopping_list/").then(res => {
      const lists = res.data;
      const id = localStorage.id;
      let userShoppingList = lists.filter(list => {
        if (list.user === Number(id)) {
          return list;
        }
        return (list = null);
      });
      this.setState({
        shoppingLists: userShoppingList,
        // currentTotal: userShoppingList[0].budget,
        isLoaded: !this.state.loaded
      });
    });
  };

  handleShowShoppingListForm = () => {
    const { showShoppingListForm } = this.state;
    this.setState({ showShoppingListForm: !showShoppingListForm });
  };
  handleShowShoppingList = (shoppingList, products) => {
    const { showShoppingList } = this.state;

    this.setState({
      showShoppingList: !showShoppingList,
      currentShoppingList: shoppingList,
      currentProducts: products
    });
  };
  componentDidMount() {
    this.getShoppingLists();
  }

  render() {
    const {
      showShoppingListForm,
      showShoppingListProduct,
      showShoppingList,
      shoppingLists,
      currentShoppingList,
      currentProducts,
      currentTotal,
      isLoaded
    } = this.state;

    return (
      <>
        <div>
          {showShoppingListForm ? (
            <ShoppingListForm
              handleShowShoppingListForm={this.handleShowShoppingListForm}
              handleShowShoppingList={this.handleShowShoppingList}
              getShoppingLists={this.getShoppingLists}
            />
          ) : (
            <Container className="shopping-list-container">
              <Row>
                <h2 className="shopping-list-heading">Your Shopping Lists</h2>
                <Col xs={12} md={12} lg={6}></Col>
                <Col xs={12} md={12} lg={6}>
                  {isLoaded && (
                    <ShoppingList
                      shoppingLists={shoppingLists}
                      currentShoppingList={currentShoppingList}
                      handleShowShoppingList={this.handleShowShoppingList}
                      products={currentProducts}
                      getShoppingLists={this.getShoppingLists}
                      currentTotal={currentTotal}
                      updateTotal={this.updateTotal}
                    />
                  )}
                </Col>
                <Col xs={12} md={12} lg={6}></Col>
              </Row>

              <Button onClick={this.handleShowShoppingListForm}>
                Click to add a new shopping list
              </Button>

              {showShoppingListProduct && <ShoppingListProductShow />}
              {showShoppingList && (
                <ShoppingListShow
                  getShoppingLists={this.getShoppingLists}
                  currentProducts={currentProducts}
                  currentShoppingList={currentShoppingList}
                  handleShowShoppingList={this.handleShowShoppingList}
                  currentTotal={currentTotal}
                  updateTotal={this.updateTotal}
                />
              )}
            </Container>
          )}
        </div>
      </>
    );
  }
}

export default ShoppingListPage;
