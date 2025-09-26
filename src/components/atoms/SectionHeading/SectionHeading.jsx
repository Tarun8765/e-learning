import React from 'react';
import './SectionHeading.css';

export default function SectionHeading({ className, headingText}) {
  return <h2 className={`title ${className ? className : ''}`}>{headingText}</h2>
}
