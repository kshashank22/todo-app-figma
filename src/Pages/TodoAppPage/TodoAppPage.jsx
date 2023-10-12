import React, { useState } from "react";
import "./TodoAppPage.css";
import TodoInput from "../../Components/TodoInput/TodoInput";
import TodoListItems from "../../Components/TodoListItems/TodoListItems";
import TodoButton from "../../Components/TodoButton/TodoButton";

function TodoAppPage() {
  const [display, setDisplay] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setDisplay(true);
  };
  return (
    <div className="todoAppPageContainer">
      <div className="headerContainer">
        <h1 className="todoHeading">Today</h1>
        <div>
          <TodoButton
            onclick={addTodo}
            className={"addButton"}
            value={
              <img
                src="https://res.cloudinary.com/dw7ksdscg/image/upload/v1697090631/More_uvu5pb.png"
                className="addTodo"
                alt="add"
              />
            }
          />
        </div>
      </div>
      {display && (
        <TodoInput
          display={display}
          setDisplay={setDisplay}
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      )}
      {todoList.length > 0 && (
        <TodoListItems todoList={todoList} setTodoList={setTodoList} />
      )}
    </div>
  );
}

export default TodoAppPage;
