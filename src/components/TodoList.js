// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const StyledUl = styled.ul `
    position: relative;
    margin-left: 19.7%;
    margin-top: 17px;
    margin-left: 20px;
`

const TodoList = (props) => {
    console.log('sunt in TodoList: ',props.state)
    return(
        <StyledUl>
            {props.state.map((elem, idx) => {
                if(elem.task.length > 0)
                {
                    return (<Todo markTask = {props.markTask} key = {idx} task = {elem.task}/>)
                }
                    
            })}
        </StyledUl>
    )
    
}

export default TodoList;

