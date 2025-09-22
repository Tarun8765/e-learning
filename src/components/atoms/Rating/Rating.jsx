import React from 'react'
import './Rating.css'

export default function Rating({ratingNo}) {
    const maxRating = 5
  return (
    <div className="rating">
        {Array.from({ length: maxRating }, (_, index) => {return(
            <i
                key={index}
                className={index < ratingNo ? "fas fa-star yellowStar" : "far fa-star"}
            ></i>
        )})}
    </div>
  )
}
