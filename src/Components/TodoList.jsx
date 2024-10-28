import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../redux/actions/todoAction'

const TodoList = () => {
  const [text, setText] = useState('')
  const todos = useSelector((state)=> state.todos.todos)
  const dispatch = useDispatch()
  const handleAddTodo = () => {
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <div>
      <h2>
        Todolist
      </h2>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={handleAddTodo}> 
        Add todo
      </button>
      {
        todos?.map((todo, index)=>(
          <p>
            {todo} 
            <button onClick={()=> dispatch(removeTodo(index))}>
              Remove Todo
            </button>
          </p>
        ))
      }
    </div>
  )
}

export default TodoList