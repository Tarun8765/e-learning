import React from 'react'

export default function Button({
    className, type, text, disabled 
}) {
  return (
    <button type={type ? "submit"  : ''} className={`btn arrow_btn ${className ? className :''}`}> {text}</button>
  )
}
