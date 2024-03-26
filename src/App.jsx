import './App.css'
import { useRef, useState, useReducer, useCallback, createContext } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'REACT 공부',
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

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state]

    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId
          ? {
              ...item,
              isDone: !item.isDone,
            }
          : item
      )

    case 'DELETE':
      return state.filter((todo) => todo.id !== action.targetId)

    default:
      return state
  }
}

export const todoContext = createContext()

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3)

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    })
  }, [])

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    })
  }, [])

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    })
  }, [])

  return (
    <div className='App'>
      <Header />
      <todoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
        <Editor />
        <List />
      </todoContext.Provider>
    </div>
  )
}

export default App
