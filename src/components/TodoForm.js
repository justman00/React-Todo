import React, { useReducer, useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
      };
  }
};

const TodoForm = (props) => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState(props.todos);

  const addTodo = (val) => {
    const newTodos = [
      ...todos,
      {
        task: val,
        id: Date.now(),
        completed: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeCompleted = () => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.completed) {
        return false;
      }
      return true;
    });
    setTodos(filteredTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal === "") return;
    console.log("Sunt in functia handleSubmit()");
    addTodo(inputVal);
    setInputVal({ inputVal: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="mb-3">
        <Input
          type="text"
          className="form-control"
          placeholder="enter task"
          value={inputVal}
          onChange={(e) => setInputVal({ inputVal: e.target.value })}
        />{" "}
        {console.log("Value", inputVal)}
        <FormGroup>
          <Button type="submit" className="col-sm-6 " color="primary">
            Add ToDo
          </Button>
          <Button
            type="button"
            className="col-sm-6 "
            color="danger"
            onClick={() => removeCompleted()}
          >
            Delete ToDo
          </Button>
        </FormGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
