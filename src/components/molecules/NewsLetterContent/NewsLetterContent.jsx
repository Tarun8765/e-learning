import React from 'react'
import Button from '../../atoms/Button/Button'

export default function NewsLetterContent() {
    const handleSubscribe = () =>{

    }
  return (
    <div className="newsletter__content">
        <h2 className="title">Want to stay <span>informed</span> about  new <span>courses &amp; study?</span>
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
