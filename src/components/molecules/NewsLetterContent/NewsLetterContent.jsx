import React from 'react'
import Button from '../../atoms/Button/Button'
import './NewsLetterContent.css'

export default function NewsLetterContent() {
    const handleSubscribe = () =>{

    }
  return (
    <div className="newsletter__content">
        <h2 className="title text-white">Want to stay <strong>informed</strong> about  new <strong>courses &amp; study?</strong>
        </h2>
        <div className="newsletter__form"> 
            <input type="email" placeholder="Type your e-mail" />
            <Button
                className='btn_secondary' 
                type='submit'
                text='Subscribe Now' 
                clickHandler={handleSubscribe}
            />
        </div>
    </div>
  )
}
