import React from 'react'
import './TestimonialItem.css';
import Rating from '../../atoms/Rating/Rating';
import AuthorThumb from '../../atoms/AuthorThumb/AuthorThumb';

export default function TestimonialItem({userImage,name,comment,rating }) {
  return (
    <div className="testimonial__item">
        <div className="testimonial__item-top mb-20">
            <div className="testimonial__author">
                <AuthorThumb
                    src={userImage}
                    alt={name}
                />
                <div className="testimonial__author-content">
                    <Rating 
                        ratingNo={rating}
                    />
                    <h4 className="testimonial_title">{name}</h4>
                </div>
            </div>
        </div>
        <div className="testimonial__content">
            <p>{comment}</p>
        </div>
    </div>
  )
}
