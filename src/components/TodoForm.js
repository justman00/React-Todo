import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = { inputVal: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputVal === "") return;
    console.log("Sunt in functia handleSubmit()");
    this.props.addTodo(this.state.inputVal);
    this.setState({ inputVal: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-grup mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="enter task"
            value={this.state.inputVal}
            onChange={(e) => this.setState({ inputVal: e.target.value })}
          />

          <div className="input-group">
            <button type="submit" className="btn btn-primary col-sm-6 ">
              Add ToDo
            </button>
            <button
              type="button"
              className="btn btn-danger col-sm-6 "
              onClick={() => this.props.removeCompleted()}
            >
              Delete ToDo
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default TodoForm;
