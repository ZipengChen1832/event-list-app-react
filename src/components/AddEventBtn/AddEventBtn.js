import React from 'react'
import "./AddEventBtn.css"

export default function AddEventBtn({text,handleAdd}) {
  return (
    <button className='btn-add-event' onClick={handleAdd}>{text}</button>
  )
}
