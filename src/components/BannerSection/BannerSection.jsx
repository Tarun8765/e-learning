import BannerRight from "../BannerSection/bannerRight/BanneRight";
import Bannerleft from "../BannerSection/bannerLeft/BannerLeft";
import "../BannerSection/BannerSection.css";
function BannerSection() {
  return (
    <section className="banner_area border">
      <div className="container">
        <div className="row justify-content-between align-items-start ">
          <Bannerleft />
          <BannerRight />
        </div>
      </div>
      <img
        src="/images/courseSlider/banner_shape01.svg"
        alt="shape"
        className="line-shape aos-animate"
      />
    </section>
  );
}

export default BannerSection;
