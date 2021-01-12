import React from 'react';

function Todo({ task, id, completed, onCompletedChange }) {
  const style = {
    textDecoration: completed ? 'line-through' : 'none',
  };

  return <div onClick={() => {
    onCompletedChange(id)
  }} style={style}>{task}</div>;
}

export default Todo;
