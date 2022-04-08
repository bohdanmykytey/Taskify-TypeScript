
import React, {useState} from 'react';
import "./App.css";
import InputField from "./components/InputField"
import { Todo } from './model'

//declaring react functional component
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      console.log(todos)
      setTodo('')
      console.log(todos)
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>

    </div>
  )
}

export default App;
