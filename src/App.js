import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends Component {
  state = { todos: [] };

  addTodo(val) {
    const newTodos = [
      ...this.state.todos,
      {
        task: val,
        id: Date.now(),
        completed: false,
      },
    ];
    this.setState({ todos: newTodos });
  }

  toggleCompleted(index) {
    const updatedTodos = [...this.state.todos];
    updatedTodos[index].completed = true;
    this.setState({ todos: updatedTodos });
  }

  // remove tasks using .filter()
  removeCompleted(index) {
    const filteredTodos = this.state.todos.filter(function (todo) {
      return todo.id !== index;
    });
    this.setState({ todos: filteredTodos });
  }

  render() {
    return (
      <div>
        <h2>ToDo List:</h2>
        <h5>You have to complete {this.state.todos.length} tasks </h5>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm
          addTodo={this.addTodo}
          removeCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;
