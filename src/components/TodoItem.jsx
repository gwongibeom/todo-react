import './TodoItem.css'
import React from 'react'

const TodoItem = () => {
  return (
    <div className='TodoItem'>
      <input type='checkbox' />
      <div className='content'>todo</div>
      <div className='date'>Date</div>
      <button>삭제</button>
    </div>
  )
}

export default TodoItem
