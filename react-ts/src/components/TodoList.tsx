import React from 'react'
import { Todo } from '../model'
import './styles.css'

interface todosProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<todosProps> = ({todos, setTodos}: todosProps) => {
  return (
    <div className="todos">
        {todos.map((todo) => (
            <li>{todo.id}</li>
        ))}
    </div>
  )
}

export default TodoList;