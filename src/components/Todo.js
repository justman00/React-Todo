import React, { Component } from "react";
import styled from "styled-components";

const StyledListItem = styled.li`
  list-style-type: square;
`;

class Todo extends Component {
  render() {
    console.log(this.props);
    return (
      <StyledListItem
        onClick={() => this.props.toggleCompleted(this.props.id)}
        style={{
          textDecoration: this.props.completed ? "line-through" : "none",
        }}
      >
        {this.props.task}
      </StyledListItem>
    );
  }
}
export default Todo;
