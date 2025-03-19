import { useState } from 'react'
import './App.css'

function App() {
  let [todos, setTodos] = useState(['Hello, world!'])

  return (
    <>
      <div className='container'>
        <div className='content'>
          <div className='title'>
            <h2>What Should I Do</h2>
            <h1>Right Now?</h1>
          </div>
          <div className='list'>
            {todos.map((todo) => (
              <div className='list-item'>{todo}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
