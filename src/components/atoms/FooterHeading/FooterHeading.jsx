import React from 'react'
import './FooterHeading.css';

export default function FooterHeading({className,text}) {
  return  <h4 className={`footer__widget-title ${className ? className :''}`}>{text}</h4>;

}
