import React from 'react'
import './Title.css';

export default function Title({className, title}) {
  return <span className={` sub-title ${className ? className :''}`}>{title}</span>
}
