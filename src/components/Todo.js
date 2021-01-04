import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <li
        style={{
          textDecoration: this.props.task.completed ? "line-through" : "",
        }}
        onClick={() => this.props.toggleCompleted(this.props.key)}
      >
        {this.props.task}
      </li>
    );
  }
}

export default Todo;
