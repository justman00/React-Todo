import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = { inputVal: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault(); //prevents the page from automatically refreshing when the form is submitted
    if (this.state.inputVal === "") return; //check to see if there is any text in the input field.If it is empty, we do nothing, and return from this function
    this.props.addTodo(this.state.inputVal); //otherwise, we call the function that was passed down as a prop, which actually adds the todo item to our App’s state
    this.setState({ term: "" }); //clearing out the input field
  };

  render() {
    return (
      <form onSubmit={() => this.handleSubmit}>
        <input
          type="text"
          placeholder="enter task"
          value={this.state.inputVal}
          onChange={(e) => this.setState({ inputVal: e.target.value })}
        />
        <button type="submit">Add ToDo</button>
        <button
          type="submit"
          onClick={() => {
            this.props.removeCompleted();
          }}
        >
          Clear completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
