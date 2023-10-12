import React from "react";
import "./TodoListItems.css";

const TodoListItems = ({ todoList, setTodoList }) => {
  const updateCheckbox = (eachTodo) => {
    setTodoList(
      todoList.map((eachElement) => {
        if (eachElement.id === eachTodo.id) {
          return { ...eachElement, status: !eachElement.status };
        }
        return eachElement;
      })
    );
  };

  return (
    <ul>
      {todoList.map((eachElement) => {
        return (
          <li key={eachElement.id} className="todo-list-items-container">
            <input
              type="checkbox"
              className="checkboxStyling"
              onChange={() => updateCheckbox(eachElement)}
              checked={eachElement.status}
            />

            <div className="contentBox">
              <label className="contentStyling">{eachElement.title}</label>
              {eachElement.status ? (
                <label className="circle completeStatus"></label>
              ) : (
                <label className="circle inCompleteStatus"></label>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoListItems;
