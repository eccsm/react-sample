import React, { Component } from 'react'
import { Table,Button } from "reactstrap";

export default class Cart extends Component {
    render() {
        return (
            <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((c) => (
            <tr key={c.product.id}>
              <th scope="row">{c.product.id}</th>
              <td>{c.product.productName}</td>
              <td>{c.product.unitPrice}</td>
              <td>{c.quantity}</td>
              <td><Button color="danger" onClick={()=>this.props.deleteFromCart(c.product)}>Remove</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
        )
    }
}
