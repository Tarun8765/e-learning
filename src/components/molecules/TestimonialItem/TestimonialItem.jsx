import React from 'react'
import './TestimonialItem.css';
import Rating from '../../atoms/Rating/Rating';
import AuthorThumb from '../../atoms/AuthorThumb/AuthorThumb';

export default function TestimonialItem() {
  return (
    <div className="testimonial__item">
        <div className="testimonial__item-top">
            <div className="testimonial__author">
                <AuthorThumb />
                <div className="testimonial__author-content">
                    <Rating />
                    <h2 className="title">Wade Warren</h2>
                </div>
            </div>
        </div>
        <div className="testimonial__content">
            <p>“ when an unknown printer took alley ffferer area typey and scrambled to make a type specimen book hass”</p>
        </div>
    </div>
  )
}
