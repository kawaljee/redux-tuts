import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/counter'
import TodoList from './Components/TodoList'
import Post from './Components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter />
     <TodoList />
     <Post />
    </>
  )
}

export default App
