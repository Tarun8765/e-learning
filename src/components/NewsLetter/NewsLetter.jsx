import React from "react";
import "./newsletter.css";
//import sideimg from "/images/newsletter_shape03.png";
import boy from "../../../public/images/newsletter/newsletter_img.png";

const NewsLetter = () => {
  return (
    <section className="newsletter__area">
      <div className="container">
        <div className="row-align-item-center d-flex">
          <div className="col-lg-4">
            <div className="newsletter__img-wrap">
              <img src={boy} alt="img"></img>
            </div>
          </div>
          <div classNameName="col-lg-8">
            <div classNameName="row">
              <div classNameName="newsletter__content col-md-9">
                <h2 classNameName="title ">
                  Want to stay <strong>informed</strong>"about"
                  <strong> new courses</strong> &amp; study?
                </h2>
                <div classNameName="newsletter__form">
                  <form action="#" classNameName="d-flex">
                    <input placeholder="Type your email" type="email" />
                    <button type="submit" className="btn">
                      subscrib Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="newsletter__content d-flex">
              <h2 className="title ">
                Want to stay <strong>informed</strong> "about"
                <strong>new courses </strong>" & study? "
              </h2>
              <div className="newsletter__form">
                <form action="#" className="d-flex">
                  <input type="email" placeholder="Type your email"></input>
                  <button type="submit" className="btn">
                    subscrib Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter__shape">{/* <img src={sideimg}></img> */}</div>
    </section>
  );
};
export default NewsLetter;
