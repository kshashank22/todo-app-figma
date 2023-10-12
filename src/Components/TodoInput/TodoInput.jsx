import React from 'react'
import { v4 as uuidv4 } from "uuid";
import './TodoInput.css'

const TodoInput=({setDisplay,todoInput,setTodoInput,todoList,setTodoList}) =>{

  const cancelInput=()=>{
    setDisplay(false)
  }

  const updatedTodoInput=(event)=>{
    if (event.target.value !== " "){
        setTodoInput(event.target.value)
    }
  }

  const addTodoTask = (event) => {
    event.preventDefault();
    if (todoInput.trim() !== "") {
      setTodoList([
        ...todoList,
        { id: uuidv4(), title: todoInput, status: false },
      ]);    
      setTodoInput("");
      setDisplay(false)
    }
    setTodoInput("");
  };

  return (
    <form onSubmit={addTodoTask} className='todoIputContainer'>
      <p className='addTodoDescription'>Add Todo</p>
      <textarea className='textAreaStyling' value={todoInput} onChange={updatedTodoInput}></textarea>
      <br/>
      <div className='buttonContainer'>
        <button className='buttonStylingCancel' onClick={cancelInput}>Cancel</button>
        <button type="submit" className='buttonStylingDone' onClick={addTodoTask}>Done</button>
      </div>
    </form>
  )
}

export default TodoInput