import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class CartNav extends Component {
  empty() {
    return <DropdownItem key="empty">Your Cart is Empty</DropdownItem>;
  }
  renderBlock() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          My Cart <Badge color="danger">{this.props.cart.length}</Badge>
        </DropdownToggle>

        <DropdownMenu right>
          {this.props.cart.length === 0
            ? this.empty()
            : this.props.cart.map((p) => (
                <DropdownItem key={p.product.id}>
                  <Badge onClick={() => this.props.deleteFromCart(p.product)}>
                    X
                  </Badge>
                  {p.product.productName} {p.quantity}
                </DropdownItem>
              ))}
          {this.props.cart.length !== 0 ? (
            <DropdownItem>
              <Link to="cart">Cart Detail</Link>
            </DropdownItem>
          ) : (
            <div />
          )}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return <div>{this.renderBlock()}</div>;
  }
}
