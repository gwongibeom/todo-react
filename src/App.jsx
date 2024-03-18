import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mookData = [
  {
    id: 0,
    isDone: false,
    content: '리액트 공부',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래연습',
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(mookData)

  return (
    <div className='App'>
      <Header />
      <Editor />
      <List />
    </div>
  )
}

export default App
