import React from "react";

interface todoProps  {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({todo, setTodo}: todoProps) => {
  return (
    <form className="input">
      <input 
        type="input" 
        placeholder="Enter a task" 
        className="input_box" 
        value={todo}
        onChange={e => setTodo(e.target.value)}
        />

      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
