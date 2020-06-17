import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import CartNav from "./CartNav";

export default class Navigator extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Casim Bakkal</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">GitHub</NavLink>
            </NavItem>
            <CartNav cart={this.props.cart} deleteFromCart={this.props.deleteFromCart}></CartNav>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
