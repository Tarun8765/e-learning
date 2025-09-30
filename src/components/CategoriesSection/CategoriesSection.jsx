import "../CategoriesSection/categoriesSection.css";
import CourseHead from "../BestCourseSection/CourseHead/CourseHead";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import categoriesData from "../data/categoriesSlider.json";
function CategoriesSection() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <span
        className={className}
        style={{
          ...style,

          display: "block",
          background: "red",
          borderRadius: "20px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <span
        className={className}
        style={{
          ...style,
          display: "flex",
          marginInlineEnd: "15px",
          justifyContent: "center",
          alignItems: "center",
          background: "green",
          height: "30px",
          width: "30px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
                  <div className="swiper-wrapper">
                    <div
                      className="swiper-slides  d-flex justify-content-center align-items-center "
                      style={{ width: "153.333" }}
                    >
                      {categoriesData?.categoriesItens?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="categories_item text-align-center  "
                          >
                            <a className="text-decoration-none" href="#">
                              <i className="icon">
                                <img src={item.iconUrl} alt="icon" />
                              </i>
                              <span className="name">{item.name}</span>
                              <span className="courses">({item.courses})</span>
                            </a>
                          </div>
                        );
                      })}
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
