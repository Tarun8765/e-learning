import React from 'react'
import './Button.css'

export default function Button({
    className, type, text, disabled, 
    iconStatus,
    icon,
    href,
    clickHandler
}) {
  return (
    <>
    {href ? 
    <a href={`${href ? href : '#'}`} className={`btn ${iconStatus ? 'arrow_btn' : ''} ${disabled ? ' disabled ':''} ${className ? className :''}`} disabled={disabled ? disabled :false}> {text} {icon ? icon :''} </a>
    :
    <button disabled={disabled ? disabled :false} onClick={clickHandler} type={type ? type  : "button"} className={`btn ${className ? className :''} ${iconStatus ? 'arrow_btn' : ''} ${disabled ? ' disabled ':''} `}> {text} {icon ? icon :''}</button>
    }
    </>
  )
}
