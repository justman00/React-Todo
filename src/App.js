import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import MetaTags from "react-meta-tags";
import styled from "styled-components";
import { Container, Row } from "reactstrap";
import "./App.css";

const StyledDiv = styled.div`
  border-top-left-radius: 42px;
  background-color: white;
  padding: 2em;
`;
const StyledH2 = styled.h2`
font-family:  font-family: Arial, Helvetica, sans-serif;
`;
const StyledH6 = styled.h6`
  color: gray;
`;

//import ls from "local-storage";
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends Component {
  state = { todos: [] };

  addTodo = (val) => {
    const newTodos = [
      ...this.state.todos,
      {
        task: val,
        id: Date.now(),
        completed: false,
      },
    ];
    console.log("Sunt in fuctia addTodo()");
    this.setState({ todos: newTodos });
  };

  toggleCompleted = (id) => {
    const updatedTodos = [...this.state.todos];
    const newUpdatedTodos = updatedTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: true,
        };
      }
      return todo;
    });
    this.setState({ todos: newUpdatedTodos });
  };

  removeCompleted = (id) => {
    const filteredTodos = this.state.todos.filter(function (todo) {
      return todo.id !== id;
    });
    this.setState({ todos: filteredTodos });
  };

  render() {
    return (
      <Container className="mt-5">
        <MetaTags>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </MetaTags>
        <Row className="d-flex justify-content-center">
          <Container className="col-md-6">
            <StyledDiv>
              <StyledH2>ToDo List:</StyledH2>
              <StyledH6>
                You have to complete {this.state.todos.length}
                {this.state.todos.length === 1 ? " task" : " tasks"}
              </StyledH6>
              <TodoList
                todos={this.state.todos}
                toggleCompleted={this.toggleCompleted}
              />
              <TodoForm
                addTodo={this.addTodo}
                removeCompleted={this.removeCompleted}
              />
            </StyledDiv>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default App;
