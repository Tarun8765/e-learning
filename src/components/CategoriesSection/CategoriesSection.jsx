import "../CategoriesSection/categoriesSection.css";
import CourseHead from "../BestCourseSection/CourseHead/CourseHead";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CategoriesSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className=" categories-area py-120">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-5 col-lg-7 d-flex justify-content-center">
            <CourseHead
              title={"Top Category We Have"}
              subTitle={"Trending Categories"}
              desciption={
                "when known printer took a galley of type scrambl edmake"
              }
            />
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-12">
            <div className="categories_wrap">
              <div className="categories-slider ">
                <Slider {...settings}>
                  <div className="swiper-wrapper my-2">
                    <div
                      className="swiper-slides  d-flex justify-content-center align-items-center"
                      style={{ width: "153.333" }}
                    >
                      <div className="categories_item text-align-center ">
                        <a className="text-decoration-none" href="#">
                          <div className="icon">
                            <i className="flaticon-graphic-design"> </i> l
                          </div>
                          <span className="name">Graphic Design</span>
                          <span className="courses">(22)</span>
                        </a>
                      </div>
                      <div className="categories_item text-align-center">
                        <a className="text-decoration-none" href="#">
                          <div className="icon">
                            <i className="flaticon-graphic-design"> </i> l
                          </div>
                          <span className="name">Graphic Design</span>
                          <span className="courses">(22)</span>
                        </a>
                      </div>
                      <div className="categories_item text-align-center">
                        <a className="text-decoration-none" href="#">
                          <div className="icon">
                            <i className="flaticon-graphic-design"> </i> l
                          </div>
                          <span className="name">Graphic Design</span>
                          <span className="courses">(22)</span>
                        </a>
                      </div>
                      <div className="categories_item text-align-center">
                        <a className="text-decoration-none" href="#">
                          <div className="icon">
                            <i className="flaticon-graphic-design"> </i> l
                          </div>
                          <span className="name">Graphic Design</span>
                          <span className="courses">(22)</span>
                        </a>
                      </div>
                      <div className="categories_item text-align-center">
                        <a className="text-decoration-none" href="#">
                          <div className="icon">
                            <i className="flaticon-graphic-design"> </i> l
                          </div>
                          <span className="name">Graphic Design</span>
                          <span className="courses">(22)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
