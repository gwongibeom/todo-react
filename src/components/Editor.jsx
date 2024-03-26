import './Editor.css'
import React, { useRef, useState, useContext } from 'react'
import { todoContext } from '../App'

const Editor = () => {
  const { onCreate } = useContext(todoContext)
  const [content, setContent] = useState('')
  const contentRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit()
    }
  }

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus()
      console.log('거부')
      return
    }
    onCreate(content)
    setContent('')
  }

  return (
    <div className='Editor'>
      <input
        placeholder='새로운 Todo...'
        onChange={onChangeContent}
        onKeyDown={onKeydown}
        value={content}
        ref={contentRef}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor
