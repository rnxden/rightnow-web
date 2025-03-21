import { useState, useEffect } from 'react'
import './App.css'

function App() {
  let [todos, setTodos] = useState(() => {
    let todosData = localStorage.getItem('todos')
    let todos = JSON.parse(todosData) ?? []
    return todos
  })
  let [todoInput, setTodoInput] = useState('')

  useEffect(() => {
    let todosData = JSON.stringify(todos)
    localStorage.setItem('todos', todosData)
  }, [todos])

  let addTodo = () => {
    if (todoInput.trim() === '') return
    setTodos((todos) => [...todos, todoInput])
    setTodoInput('')
  }

  let removeTodo = (removeIdx) => {
    setTodos((todos) => todos.filter((_, idx) => idx !== removeIdx))
  }

  return (
    <>
      <div className='container'>
        <div className='content'>
          <div className='title'>
            <h2>What Should I Do</h2>
            <h1>Right Now?</h1>
          </div>
          <div className='prompt'>
            <input
              className='prompt-input'
              type='text'
              placeholder='Add a task'
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addTodo()
                }
              }}
            ></input>
            <button className='prompt-button' onClick={addTodo}>
              <svg className='prompt-icon' xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 448 512'>
                <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
              </svg>
            </button>
          </div>
          <div className='list'>
            {todos.map((todo, idx) => (
              <div className='list-item' key={idx}>
                <div className='list-item-text'>{todo}</div>
                <div className='list-item-actions'>
                  <button className='list-item-action-delete' onClick={() => removeTodo(idx)}>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 448 512'>
                      <path d='M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z' />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            <div className='list-end'>
              {todos.length > 0
                ? `You have ${todos.length} thing${todos.length === 1 ? '' : 's'} to do!`
                : 'Nothing to do...'}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
