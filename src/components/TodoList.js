import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((el, idx) => {
          return (
            <Todo
              task={el.task}
              key={idx}
              toggleCompleted={this.props.toggleCompleted}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
