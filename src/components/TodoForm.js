import React from 'react';

function TodoForm({ onAddTodo, onClearCompleted }) {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // iau valoarea inputului
    // sa apelez onAddTodo
    console.log(inputValue);
    onAddTodo(inputValue);

    setInputValue('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" />
      <button type="submit">Submit</button>
      <button type="button" onClick={onClearCompleted}>Clear completed todos</button>
    </form>
  );
}

export default TodoForm;
