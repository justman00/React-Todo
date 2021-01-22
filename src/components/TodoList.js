import React, { Component } from "react";
import Todo from "./Todo";
import { Container, Input, List } from "reactstrap";
class TodoList extends Component {
  constructor() {
    super();
    this.state = { inputValue: "" };
  }

  render() {
    return (
      <Container>
        <Input
          type="text"
          className="d-none"
          placeholder="search task"
          onChange={(e) => {
            this.setState(e.target.value);
          }}
        ></Input>
        <List>
          {this.props.todos
            .filter((todo) => {
              if (todo.task.includes(this.state.inputValue)) {
                return true;
              }
              return false;
            })
            .map((todo, idx) => {
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
        </List>
      </Container>
    );
  }
}

export default TodoList;
