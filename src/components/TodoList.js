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
        {this.props.todos.map((todo, idx) => {
          return (
            <Todo
              task={todo.task}
              id={todo.id}
              completed={todo.completed}
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
