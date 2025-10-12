import "../bannerRight/bannerRight.css";
import arrowImage from "/images/banner_image/banner_shape01.png";
import mainImage from "/images/banner_image/banner_img.png";
import dotShape from "/images/banner_image/bg_dots.svg";
import banner_ArrowShape from "/images/banner_image/banner_shape2.svg";
import banner_ShapeDot from "/images/banner_image/banner_shape02.png";
import autImge1 from "/images/banner_image/banner_author01.png";
import autImge2 from "/images/banner_image/banner_author02.png";

function BanneRight() {
  return (
    <div className=" banner-imgages banner-right position-relative col-lg-6">
      <img
        src={mainImage}
        alt="img"
        className="main_img  "
        width={"419px"}
        height={"460px"}
      ></img>
      <div className="shape ">
        <img
          src={arrowImage}
          alt="arrow image"
          className="tg-motion-effects1 positon-absolute"
        />
      </div>
      <img src={dotShape} alt="shape" className="shape bg-dots rotateme" />
      <img
        style={{ transform: "matrix(1, 0, 0, 1, -0.694371, -4.90217)" }}
        src={banner_ShapeDot}
        alt="shape"
        className="shape small-shape tg-motion-effects3"
      />
      <div className="banner_author ">
        <div className="banner_author-item">
          <div className="image">
            <img className="w-100" src={autImge1} alt="img" />
          </div>
          <h6 className="name">Robert Fox</h6>
        </div>
        <div className="banner_author-item">
          <div className="image">
            <img className="w-100" src={autImge2} alt="img" />
          </div>
          <h6 className="name">Michel Jones</h6>
        </div>
        <img
          src={banner_ArrowShape}
          alt="shape"
          className="arrow-shape tg-motion-effects3"
          width={"92px"}
          height={"65px"}
          style={{ transform: " matrix(1, 0, 0, 1, 1.15854, 3.57609)" }}
        />
      </div>
    </div>
  );
}

export default BanneRight;
