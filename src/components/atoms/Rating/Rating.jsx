import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import './Rating.css'

export default function Rating({ratingNo}) {
    const maxRating = 5
  return (
    <div className="d-flex gap-0 rating ">
        {Array.from({ length: maxRating }, (_, index) => {return(
            <div key={index} className={index < ratingNo ? 'yellowStar' : ''}>
                <FontAwesomeIcon icon={faStar} />
            </div>
        )})}
    </div>
  )
}
