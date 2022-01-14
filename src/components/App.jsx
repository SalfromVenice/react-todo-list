import React from "react";

import todosData from "../todosData";
import ToDoItem from "./ToDoItem";

const App = () => {
  return (
    <div className="todo-list">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  )
}

export default App
