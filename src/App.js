import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  console.log("sint in reducer: ", state);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "MARK_COMPLETE_TODOS":
      return state.map((el) => {
        if (el.id !== action.payload.idTodo) {
          return el;
        }

        return {
          ...el,
          completed: !el.completed,
        };
      });

    case "CLEAR_COMPLETED_TODOS":
      return state.filter((todo) => todo.completed !== true);
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  const addToList = (inputRef) => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        task: inputRef,
        completed: false,
      },
    });
  };
  console.log("dupa reducer: ", state);

  const markTask = (id) => {
    dispatch({
      type: "MARK_COMPLETE_TODOS",
      payload: {
        idTodo: id,
      },
    });
  };

  const clearMarkedTask = () => {
    dispatch({
      type: "CLEAR_COMPLETED_TODOS",
    });
  };

  return (
    <div className="App">
      <TodoForm addToList={addToList} clearMarkedTask={clearMarkedTask} />
      <TodoList state={state} markTask={markTask} />
    </div>
  );
};

export default App;
