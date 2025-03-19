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
          <div className='prompt'>
            <input className='prompt-input' type='text' placeholder='Add a task'></input>
            <button className='prompt-button'>
              <svg className='prompt-icon' xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 448 512'>
                <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
              </svg>
            </button>
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
