import React from 'react'
import './OfferFeatureItem.css'
import Sparkles from '../../atoms/Icons/Sparkles'
import './OfferFeatureItem.css'

export default function OfferFeatureItem({icon, title, content, starIcon, headingClass, iconClass, iconWraperClass, itemContentClass, itemClass}) {
  return (
    <div className={`offer_features_item ${itemClass ? itemClass :''}`}>
        <div className={`features_content ${itemContentClass ? itemContentClass :''}`}>
            <div className={`content-top ${iconWraperClass ? iconWraperClass :''}`}>
                {icon ?
                <div className={`features_icon ${iconClass ? iconClass :''}`}>
                    {icon}
                </div>
                :''}
                {title ? <h2 className={`title ${headingClass ? headingClass :''}`}>{title}</h2> : ''}
            </div>
            {content ? <p>{content}</p> : ''}
        </div>
        {starIcon ? 
        <div className="features_item-shape">
            <Sparkles/>
        </div>
        :''}
    </div>
  )
}
