import React from 'react'

export default function FeaturesItem({src,alt,heading, comtent, content_wraper, img_wraper, item_wraper, item_title_class }) {
  return (
    <div className={`features__item ${item_wraper ? item_wraper : ''}`}>
        <div className={`features__icon ${img_wraper ? img_wraper : ''}`}>
            <img src={src} alt={alt}/>
        </div>
        <div className={`features__content ${content_wraper ? content_wraper : ''}`}>
            <h4 className={`title ${item_title_class ? item_title_class : ''}`}>{heading}</h4>
            <p>{comtent}</p>
        </div>
    </div>
  )
}
