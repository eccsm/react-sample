import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Legends from "./Legends";
import Features from "./Features";
import Navigator from "./Navigator";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Cart from "./Cart";

export default class App extends Component {
  state = {
    products: [],
    nameOfLegend: "",
    cart: [],
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    const result = newCart.find((p) => p.product.id === product.id);
    if (result) {
      result.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " has added to cart");
  };

  deleteFromCart = (product) => {
    let newCart = this.state.cart.filter((p) => p.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " has deleted from cart");
  };

  changeName = (player) => {
    this.setState({ nameOfLegend: player.categoryName });
    this.getProducts(player.id);
  };

  componentDidMount = () => {
    this.getProducts();
  };

  getProducts = (categoryId) => {
    let uri = "http://localhost:3000/products";

    if (categoryId) {
      uri += "?categoryId=" + categoryId;
    }

    fetch(uri).then((response) =>
      response.json().then((data) => this.setState({ products: data }))
    );
  };

  render() {
    return (
      <div>
        <Container>
          <Navigator
            cart={this.state.cart}
            deleteFromCart={this.deleteFromCart}
          />
          <Row>
            <Col xs="3">
              <Legends title={this.state.nameOfLegend} spec={this.changeName} />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Features
                      {...props}
                      data={this.state.products}
                      title={this.state.nameOfLegend}
                      spec={this.addToCart}
                    />
                  )}
                />

                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <Cart
                      {...props}
                      data={this.state.cart}
                      deleteFromCart={this.deleteFromCart}
                    />
                  )}
                />

                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
