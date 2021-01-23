import React,{useRef} from 'react';
import styled from 'styled-components';

const StyledLi = styled.li `
   &:hover {
      cursor: pointer;
   }
   list-style: none;
   line-height: 20px;
   background-color: white;
   box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
   margin-top: 10px;
   width: 200px;
   padding-left: 10px;
   padding-top: 5px;
   padding-bottom: 5px;
   padding-right: 3px;
   font-size: 18px;
   border-radius: 6px;
`

const Todo = (props) => {
   const liRef = useRef();

   const markTask = (e) =>{
      props.markTask(liRef.current.innerText, e);
   }
   return(
      <StyledLi ref = {liRef} onClick = {markTask}>
         {props.task}
      </StyledLi>
   )
   
}

export default Todo;