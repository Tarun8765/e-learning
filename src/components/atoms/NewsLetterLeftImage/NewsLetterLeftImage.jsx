import React from 'react'
import boy from "/images/newsletter/newsletter_img.png";
import shape01 from "/images/newsletter/newsletter_shapeMove.png";
import shape02 from "/images/newsletter/newsletter_background.png";
import './NewsLetterLeftImage.css'

export default function NewsLetterLeftImage() {
  return (
    <div className="newsletter_img_wrap">
        <img className='newsletter_img1' src={boy} alt='newsletter-boy-image' />
        <img src={shape01} alt="shape01"  className="alltuchtopdown newsletter_img2" />
        <img src={shape02} alt="shape02" className=" nl-init nl-animate newsletter_img3" />
    </div>
  )
}
