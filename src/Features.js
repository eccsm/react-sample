import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class Features extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>QPU</th>
            <th>Unit Price</th>
            <th>Stock Unit</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td><Button color="success" onClick={()=>this.props.spec(product)}>Add</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
