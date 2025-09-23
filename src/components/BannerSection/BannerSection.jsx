import BannerRight from "../BannerSection/bannerRight/BanneRight";
import Bannerleft from "../BannerSection/bannerLeft/BannerLeft";
function BannerSection() {
  return (
    <section className="banner_area">
      <hr />
      <div className="container">
        <div className="row justify-content-between align-items-start ">
          <Bannerleft />
          <BannerRight />
        </div>
      </div>
      <img
        src="../../../public/images/courseSlider/banner_shape01.svg"
        alt="shape"
        className="line-shape aos-animate"
      />
    </section>
  );
}

export default BannerSection;
