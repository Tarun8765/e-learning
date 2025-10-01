import React from 'react'
import Button from '../../atoms/Button/Button'
import './NewsLetterSection.css'
import NewsLetterLeftImage from '../../atoms/NewsLetterLeftImage/NewsLetterLeftImage'
import NewsLetterContent from '../../molecules/NewsLetterContent/NewsLetterContent'
import backgroundImage from "/images/newsletter/newsletter_shape03.png";

export default function NewsLetterSection() {
   
  return (
    <section className="newsletter__area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <NewsLetterLeftImage />
                </div>
                <div className="col-lg-6">
                    <NewsLetterContent />
                </div>
            </div>
        </div>
        <div className="newsletter__shape">
            <img src={backgroundImage} alt="background-image" className="nl-init nl-animate" />
        </div>
    </section>
  )
}
