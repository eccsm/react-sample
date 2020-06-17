import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Legends extends Component {

  state = {players : []}

  componentDidMount = () =>
  {
    this.getCategories()
  }

  getCategories=()=>
  {
    fetch("http://localhost:3000/categories").then(response => response.json()).then(data => this.setState({players:data}))
  }
  render() {
    return (
      <div>
        <ListGroup>
          {this.state.players.map(player=> (
            <ListGroupItem key={player.id} onClick={()=>this.props.spec(player)} active={player.categoryName===this.props.title}>{player.categoryName}</ListGroupItem>
          ))}
          
        </ListGroup>
      </div>
    );
  }
}
