import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Api from "../apis/api";
import StoreShow from "./StoreShow";
import StoreForm from "./StoreForm";
import StorePage from "./StorePage";
import ReactLoading from "react-loading";

class Store extends Component {
  state = {
    stores: [],
    showForm: false,
    showStore: false,
    selectedStore: null
  };

  getStores = () => {
    Api.get("stores/").then(res => {
      console.log(res.data);
      let stores = res.data;
      let usersStores = stores.filter(store => {
        if (Number(store.user) === Number(localStorage.id)) {
          return store;
        }
        return (store = null);
      });

      this.setState({ stores: usersStores });
    });
  };

  allStores = () => {
    const { stores, selectedStore } = this.state;

    return stores.map((store, i) => (
      <StoreShow
        key={i}
        {...store}
        store={store}
        handleShowStore={this.handleShowStore}
        selectedStore={selectedStore}
        getStores={this.getStores}
      />
    ));
  };

  selectedStore = () => {
    const { stores, selectedStore } = this.state;
    const { id } = selectedStore;
    return stores.map((store, i) => {
      if (store.id === id) {
        return (
          <StorePage
            key={i}
            {...store}
            handleShowStore={this.handleShowStore}
          />
        );
      } else {
        return null;
      }
    });
  };

  handleShowForm = () => {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  };
  handleShowStore = store => {
    const { showStore } = this.state;
    this.setState({ showStore: !showStore, selectedStore: store });
  };

  componentDidMount() {
    this.getStores();
  }
  render() {
    const { showForm, showStore } = this.state;
    return (
      <Container>
        {!showStore ? (
          <>
            <div className="store-main-heading">
              <p>My Stores</p>
            </div>
            <Row className="store-col-header">
              <Col>
                <strong>Address</strong>
              </Col>
              <Col>
                <strong>Name</strong>
              </Col>

              <Col>
                <strong>Aisles</strong>
              </Col>
              <Col>
                <strong>Products</strong>
              </Col>
              <Col></Col>
            </Row>

            {!showStore ? (
              this.allStores()
            ) : (
              <ReactLoading
                type="spokes"
                color="#007bff"
                height={667}
                width={375}
              />
            )}

            <Row>
              <Col> </Col>
              <Col>
                <Button
                  className="add-store"
                  variant="outline-primary"
                  onClick={this.handleShowForm}
                >
                  Add a store
                </Button>
              </Col>
              <Col> </Col>
            </Row>
            <Row>
              <Col> </Col>
              <Col sm={12} md={12} lg={12}>
                {showForm && (
                  <StoreForm
                    handleShowForm={this.handleShowForm}
                    showForm={showForm}
                  />
                )}
              </Col>
              <Col> </Col>
            </Row>
          </>
        ) : (
          // <div>Hey</div>
          <>{this.selectedStore()}</>
        )}
      </Container>
    );
  }
}

export default Store;
