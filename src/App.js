import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import React, { useReducer, useState } from 'react';

function todoReducer(state, action) {
   console.log('sint in reducer: ',state)
    switch(action.type) {
      case 'ADD_TODO':
        return [
          ...state, 
          action.payload
        ]
      case 'MARK_COMPLETE_TODOS':
        return state.map((el) => {
          if(el.id !== action.payload.idTodo) {
            return el;
          }

          return {
            ...el,
            completed: !el.completed
          }
        })
         
      case 'CLEAR_COMPLETED_TODOS':
        return state.filter(todo => todo.completed !== true)
      default:
        return state;
    }
};

const App = () => {
  const[todos, setTodos] = useState([])
  const[state, dispatch] = useReducer(todoReducer, todos);

  const addToList = (inputRef) => {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          id: Date.now(),
          task: inputRef,
          completed: false
        }
    })
    
 } 
 console.log('dupa reducer: ',state)
 
  const markTask = (liRef, e) => {
    e.target.style.textDecoration = 'line-through'
    console.log(e.target)
    
    state.map((el, index) => {
      if(el.task === liRef) {
        dispatch({
          type: 'MARK_COMPLETE_TODOS',
          payload: {
            idTodo: el.id
          }
        })
      }
    })
  }

  const clearMarkedTask = () => {
    dispatch({
      type: 'CLEAR_COMPLETED_TODOS'
    })
    let elements = document.getElementsByTagName('li'), i, len;
  
    for (i = 0, len = elements.length; i < len; i++) {
      elements[i].style.textDecoration = 'none';
    }
  }

  return (
    <div className = "App">
      <TodoForm addToList = {addToList} clearMarkedTask = {clearMarkedTask}/>
      <TodoList state = {state} markTask = {markTask}/>
    </div>
    )
}

export default App;
