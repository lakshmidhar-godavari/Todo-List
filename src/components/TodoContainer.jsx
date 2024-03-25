import React from "react";
import Todo from "./Todo";

function TodoContainer({ todos, deltodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return <Todo todo={todo} index={index} deltodo={deltodo} />;
      })}
    </div>
  );
}

export default TodoContainer;
