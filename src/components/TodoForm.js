import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = { inputVal: "" };
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="enter task"
          value={this.state.inputVal}
          onChange={(e) => this.setState({ inputVal: e.target.value })}
        />
        <button type="submit" onClick={() => this.props.addTodo(this.inputVal)}>
          Add ToDo
        </button>
        <button type="submit">Clear completed</button>
      </form>
    );
  }
}

export default TodoForm;
