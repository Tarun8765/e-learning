import React from 'react'
import Title from '../../atoms/Title/Title'
import SectionHeading from '../../atoms/SectionHeading/SectionHeading'
import './SectionHeader.css'


export default function SectionHeader({title, headingText, content, columnSize ,textAlignment, contentAlignment }) {
  return (
    <div className={`row ${contentAlignment ? contentAlignment : 'justify-content-center '}`}>
        <div className={`${columnSize ? columnSize : ' col-xl-5 '}`}>
            <div className={`section_title  mb-50 ${textAlignment ? textAlignment : 'text-center '}`}>
                {title ?? <Title 
                  title={title}
                /> }
                {headingText ?? <SectionHeading 
                  headingText={headingText}
                />
                }
                {content ?? <p>{content}</p>}
            </div>
        </div>
    </div>
  )
}
