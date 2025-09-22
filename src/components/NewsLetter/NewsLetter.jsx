 
import React from 'react';
import "./newsletter.css";
//import sideimg from "/images/newsletter_shape03.png";
import boy from"../../../public/images/newsletter_img.png";

 const NewsLetter = () =>{
  return (
    <section className="newsletter__area">
        <div className="container">
            <div className="row-align-item-center d-flex">
                <div className="col-lg-4">
                    <div className="newsletter__img-wrap">
                        <img src={boy} alt="img"></img>
                    </div>
                </div>
                <div class="col-lg-8">
    <div class="row">
        <div class="newsletter__content col-md-9">
            <h2 class="title ">Want to stay <strong>informed</strong>"about"<strong> new courses</strong> &amp; study?</h2>
            <div class="newsletter__form">
                <form action="#" class="d-flex">
                    <input placeholder="Type your email" type="email" />
                    <button type="submit" class="btn">subscrib Now</button>
                </form>
            </div>
        </div>
    </div>
</div>
                <div className="col-lg-8">
                    <div className="newsletter__content d-flex">
                        <h2 class="title ">
                            Want to stay <storng>informed</storng> "about"
                            <strong>new courses </strong>" & study? "
                        </h2>
                        <div className="newsletter__form">
                            <form action="#" class="d-flex">
                                <input type="email" placeholder="Type your email"></input>
                                <button type="submit" class="btn">subscrib Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="newsletter__shape">
            {/* <img src={sideimg}></img> */}
        </div>
    </section>
  )
}
export default NewsLetter;


