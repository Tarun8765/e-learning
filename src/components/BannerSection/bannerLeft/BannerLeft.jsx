import "../bannerLeft/bannerLeft.css";

function bannerleft() {
  return (
    <div className=" banner-left col-xl-5 col-lg-6">
      <div className="banner_content">
        <h3 className="title tg-svg">
          Never Stop
          <br />
          life
          <strong>Never Stop</strong>
          Teaching
        </h3>
        <p className="aos-init aos-animate">
          Every teaching and learning journey is unique Following We'll help
          guide your way.
        </p>
        <div className="banner_btn-wrap my-3">
          <a className="py-3 " href="#">
            Start Free Trial
          </a>
        </div>
      </div>
    </div>
  );
}

export default bannerleft;
