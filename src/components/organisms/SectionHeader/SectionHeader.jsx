import React from 'react'
import Title from '../../atoms/Title/Title'
import SectionHeading from '../../atoms/SectionHeading/SectionHeading'
import './SectionHeader.css'


export default function SectionHeader({title, headingText, content, columnSize ,textAlignment, contentAlignment, classNameWrapper, classNameHeading, classNameTitle }) {
  return (
    <div className={`row ${contentAlignment ? contentAlignment : 'justify-content-center '}`}>
        <div className={`${columnSize ? columnSize : ' col-xl-5 '} col-lg-8`}>
            <div className={`section_title  mb-50 ${classNameWrapper ? classNameWrapper :''} ${textAlignment ? textAlignment : 'text-center '}`}>
                {title ? <Title 
                  title={title} 
                  className={classNameTitle}
                />  : ''}
                {headingText ? <SectionHeading 
                  headingText={headingText}
                  className={classNameHeading}
                /> :''
                }
                {content ? <p>{content}</p> :''}
            </div>
        </div>
    </div>
  )
}
