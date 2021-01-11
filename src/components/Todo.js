import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  crossLine = (e) => {
    const element = e.target;
    element.classList.toggle("crossed-line");
    this.props.toggleCompleted(this.props.id);
  };

  render() {
    console.log(this.props);
    return <li onClick={this.crossLine}>{this.props.task}</li>;
  }
}

export default Todo;
