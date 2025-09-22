function BannerSection() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className=" banner-left col-xl-5 col-lg-6">
            <div className="banner_content">
              <h3 className="title tg-svg">
                Never Stop
                <br />
                life
                <strong>Never Stop</strong>
                Teaching
              </h3>
              <p>
                Every teaching and learning journey is unique Following We'll
                help guide your way.
              </p>
              <div className="banner_btn-wrap">
                <a href="#">Start</a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <h1>hello </h1>
          </div>
        </div>
      </div>
      <img
        src="../../../public/images/courseSlider/banner_shape01.svg"
        alt="shape"
      />
    </section>
  );
}

export default BannerSection;
