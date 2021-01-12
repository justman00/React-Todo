import React, { useState } from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const LOCALSTORAGE_KEY = 'todos';
// posibilitatea de a filtra prin todo-uri
// localStorage
class App extends React.Component {
  constructor() {
    super();
    // vreau sa citesc din localstorage
    const localStorageTodos = window.localStorage.getItem(LOCALSTORAGE_KEY);
    this.state = { todos: localStorageTodos ? JSON.parse(localStorageTodos) : [] };
  }

  onWriteToLocalStorage = (todos) => {
    const jsonTodos = JSON.stringify(todos);
    window.localStorage.setItem(LOCALSTORAGE_KEY, jsonTodos);
  };

  onAddTodo = (taskValue) => {
    // 1) trebuie sa creez un todo nou
    // creeez un obiect
    // 2) il introduc intr-un array nou
    // 3) setez array-ul nou ca noul meu state

    const newTodo = {
      task: taskValue,
      id: Date.now(),
      completed: false,
    };

    const newArr = [...this.state.todos, newTodo];

    // getter / setter
    this.onUpdateData(newArr);
  };

  onCompletedChange = (todoId) => {
    // sa generam array-ul nou
    const newArr = this.state.todos.map((_todo) => {
      // gasim todo-ul care trebuie sa fie schimbat
      if (_todo.id === todoId) {
        // sa-i transformam din completed in inversul la completed
        return {
          ..._todo,
          completed: !_todo.completed,
        };
      }

      return _todo;
    });

    // sa updatam state-ul
    this.onUpdateData(newArr);
  };

  onClearCompleted = () => {
    // eu vreau sa sterg/filtrez toate todo-urile care au completed: true
    const newArr = this.state.todos.filter((todo) => {
      if (todo.completed) {
        // il eliminam
        return false;
      }
      // necompletat, il pastram
      return true;
    });

    this.onUpdateData(newArr);
  };

  onUpdateData = (todos) => {
    this.setState({ todos });
    this.onWriteToLocalStorage(todos);
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          onCompletedChange={this.onCompletedChange}
        />
        <TodoForm
          onAddTodo={this.onAddTodo}
          onClearCompleted={this.onClearCompleted}
        />
      </div>
    );
  }
}

export default App;
