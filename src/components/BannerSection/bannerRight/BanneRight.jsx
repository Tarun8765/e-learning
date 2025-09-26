import "../bannerRight/bannerRight.css";
import arrowImage from "/images/banner_image/banner_shape01.png";
import mainImage from "/images/banner_image/banner_img.png";
import dotShape from "/images/banner_image/bg_dots.svg";
import bannerShape2 from "/images/banner_image/banner_shape02.png";
function BanneRight() {
  return (
    <div className=" banner-imgages banner-right position-relative col-lg-6">
      <img src={mainImage} alt="img" className="main_img w-100"></img>
      <div className="shape">
        <img src={arrowImage} alt="" className="tg-motion-effects1" />
      </div>
      <img src={dotShape} alt="shape" className="shape bg-dots rotateme" />
      <img
        src={bannerShape2}
        alt="shape"
        className="shape small-shape tg-motion-effects3"
      />
      {/* <div className="banner_author">author</div> */}
      <div className="banner__author">
        <div className="banner__author-item">
          <div className="image">
            <img src="assets/img/banner/banner_author01.png" alt="img"></img>
          </div>
          <h6 className="name">Robert Fox</h6>
        </div>
        <div className="banner__author-item">
          <div className="image">
            <img src="assets/img/banner/banner_author02.png" alt="img"></img>
          </div>
          <h6 className="name">Michel Jones</h6>
        </div>
        <img
          src="assets/img/banner/banner_shape02.svg"
          alt="shape"
          className="arrow-shape tg-motion-effects3"
          style="transform: matrix(1, 0, 0, 1, -1.01657, 2.09783);"
        ></img>
      </div>
    </div>
  );
}

export default BanneRight;
