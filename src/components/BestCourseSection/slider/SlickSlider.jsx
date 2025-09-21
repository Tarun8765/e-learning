import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Course_item from "../Course_item/Course_item";
import slideData from "../../data/slideData.json";

function SlickSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div style={{ height: "500px" }} className="slider-container-fluid ">
      <Slider {...settings}>
        {slideData?.slideData?.map((item, index) => {
          return (
            <div
              style={{
                boxShadow: "5px 5px rgb(19, 19, 19);",
              }}
              className=" d-flex mx-2 "
              key={index}
            >
              <Course_item data={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SlickSlider;
