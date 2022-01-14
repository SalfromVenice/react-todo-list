import React from "react";

import todosData from "../todosData";
import ToDoItem from "./ToDoItem";

const App = () => {
  const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item}/>);

  return (
    <div className="todo-list">
      {todoItems}
    </div>
  );
};

export default App;
