// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

// []
// {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false,
//   }
function TodoList({ todos, onCompletedChange }) {
  const [inputValue, setInputValue] = React.useState('')

  return (
    <div>
      <div>
        <input onChange={(e) => {
          setInputValue(e.target.value)
        }} type="text" />
      </div>
      {todos.filter(todo => {
        if(todo.task.includes(inputValue)) {
          return true
        }
        return false
      }).map((todo) => (
        <Todo key={todo.id} {...todo} onCompletedChange={onCompletedChange} />
      ))}
    </div>
  );
}

export default TodoList;
