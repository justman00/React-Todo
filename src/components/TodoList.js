import React, { Component } from "react";
import Todo from "./Todo";
import { Container, Input, List } from "reactstrap";
class TodoList extends Component {
  render() {
    return (
      <Container>
        <Input type="text" className="d-none" placeholder="search task"></Input>
        <List>
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
        </List>
      </Container>
    );
  }
}

export default TodoList;
