import React, {useRef, useState} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form `
    display:flex;
    flex-direction: row;
    justify-content: center;
`
const StyledInput = styled.input `
    height: 35px;
    width: 205px;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 5px;
    border: 0.8px solid gray;
    padding-left: 10px;
    outline: none;
    font-size: 18px;
`

const StyledButton = styled.button `
    &:hover {
        cursor: pointer;
        background-color: #81d4fa;
    }
    height: 35px;
    width: 180px;
    margin-right: 20px;
    border: none;
    position: relative;
    top: 20px;
    outline: none;
    background-color: white;
    border-radius: 10px;
`

const TodoForm = (props) => {
    const inputRef = useRef();

    const addToList = () => {
        props.addToList(inputRef.current.value);
        inputRef.current.value = '';
    }

    const clearMarkedTask = () => {
        props.clearMarkedTask();
    }

    return(
        <div>
            <StyledForm>
                <StyledInput ref = {inputRef} type = "text" placeholder = "enter the task"></StyledInput>
                <StyledButton type = "button" onClick = {addToList}>Add task</StyledButton>
                <StyledButton type = "button" onClick = {clearMarkedTask}>Clear selected</StyledButton>
            </StyledForm>
        </div>
        )
}

export default TodoForm;