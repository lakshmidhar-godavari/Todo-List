import React, { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [inputval, setinput] = useState("");
  const [todos, settodos] = useState([]);
  function writetodo(e) {
    setinput(e.target.value);
  }
  function addtodo() {
    if (inputval != '') {
      settodos((prevtodos) => [...prevtodos, inputval]);
      setinput('');
    }
  }
  function deltodo(todoindex){
     settodos(
      (prevtodos)=>
      prevtodos.filter((prevtodos,prevtodosIndex)=>
      {
        return prevtodosIndex!=todoindex;
      })

    )
  }
  console.log({todos});

  
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        inputval={inputval}
        writetodo={writetodo}
        addtodo={addtodo}
      />

      <TodoContainer  todos={todos} deltodo={deltodo}/>
    </main>
  );
}

export default App;
