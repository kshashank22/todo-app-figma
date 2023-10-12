import React, { useState } from "react";
import "./TodoAppPage.css";
import TodoInput from "../../Components/TodoInput/TodoInput";
import TodoListItems from "../../Components/TodoListItems/TodoListItems";


function TodoAppPage() {
  const [display,setDisplay]=useState(false)
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([])


  const addTodo=()=>{
    setDisplay(true)
  }
  return (
    <div className="todoAppPageContainer">
      <form className="headerContainer">
        <h1 className="todoHeading">Today</h1>
        <div>
        <img
            src="https://res.cloudinary.com/dw7ksdscg/image/upload/v1697090631/More_uvu5pb.png"
            className="addTodo"
            alt="add"
            onClick={addTodo}  
          /> 
        </div>    
      </form>
      {display &&<TodoInput display={display} setDisplay={setDisplay} todoInput={todoInput} setTodoInput={setTodoInput} todoList={todoList} setTodoList={setTodoList}/> }
      {todoList.length>0 && (
        <TodoListItems todoList={todoList}/>
      )}
    </div>
  );
}

export default TodoAppPage;
