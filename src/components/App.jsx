import React from "react";

import todosData from "../todosData";
import ToDoItem from "./ToDoItem";

// const App = () => {
//   const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item}/>);

//   return (
//     <div className="todo-list">
//       {todoItems}
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoItems: todosData.map(item => <ToDoItem key={item.id} item={item} />)
    }
  }

  render() {
    return (
      <div className="todo-list">
        {this.state.todoItems}
      </div>
    )
  }
}

export default App;
