import React from 'react'
import './AuthorThumb.css'

export default function AuthorThumb({src,alt}) {
  return (
    <div className="testimonial__author-thumb">
        <img src={src} alt={alt} />
    </div>
  )
}
