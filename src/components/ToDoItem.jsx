import React from 'react';

const ToDoItem = ({ item, handleChange }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleChange(item.id)}
      />
      <p>{item.text}</p>
    </div>
  );
};

export default ToDoItem;
