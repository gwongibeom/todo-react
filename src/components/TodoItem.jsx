import './TodoItem.css'
import React, { memo, useContext } from 'react'
import { todoContext } from '../App'
const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(todoContext)
  const onChangeCheckBox = () => {
    onUpdate(id)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <div className='TodoItem'>
      <input onChange={onChangeCheckBox} checked={isDone} type='checkbox' />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  )
}

// export default memo(TodoItem, (prevProps, nextProps) => {
//   if (prevProps.id !== nextProps.id) return false
//   if (prevProps.isDone !== nextProps.isDone) return false
//   if (prevProps.content !== nextProps.content) return false

//   return true
// })

export default memo(TodoItem)
