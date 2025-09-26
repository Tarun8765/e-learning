import "../CategoriesSection/categoriesSection.css";
import CourseHead from "../BestCourseSection/CourseHead/CourseHead";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CategoriesSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
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
          <CourseHead></CourseHead>
        </div>
        <div className="row d-flex">
          <div className="col-12">
            <div className="categories-slider ">
              <Slider {...settings}>
                <div className=" d-flex mx-2 mb-3  bg-secondary">1</div>
                <div className=" d-flex mx-2 mb-3 bg-secondary">1</div>
                <div className=" d-flex mx-2 mb-3 bg-secondary">1</div>
                <div className=" d-flex mx-2 mb-3 bg-secondary">1</div>
                <div className=" d-flex mx-2 mb-3 bg-secondary">1</div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
