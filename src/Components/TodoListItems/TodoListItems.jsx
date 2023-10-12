import React from "react";
import "./TodoListItems.css";

const TodoListItems = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((eachElement) => {
        return (
          <li key={eachElement.id} className="todo-list-items-container">
            <input type="radio" className="checkboxStyling" />
            <div className="contentBox">
              <label className="contentStyling">{eachElement.title}</label>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoListItems;
