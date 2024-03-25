import React from "react";

function InputContainer({inputval,writetodo ,addtodo}) {
  return (
    <div className="input-container">
      <input type="text" value={inputval} onChange={writetodo}/>
      <button onClick={addtodo}>+</button>
    </div>
  );
}

export default InputContainer;
