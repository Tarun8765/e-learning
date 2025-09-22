import img from "../../../../public/images/courseSlider/course_thumb01.jpg";
import "../Course_item/course_item.css";

function Course_item({ data }) {
  return (
    <div className="item  card">
      <div className="inter-container">
        <div>
          <img
            className="w-100"
            src={data?.imgURL ? data?.imgURL : img}
            alt=""
          />
        </div>
        <div className="card-body">
          <div className=" course_item-stats  my-2  ">
            <a className="px-2" href="#">
              {data?.role}
            </a>
            <p className="avg-rating mx-2">⭐ ({data?.rating} Reviews)</p>
          </div>

          <h5 className="title my-2">
            <a href="#">{data?.title}</a>
          </h5>
          <p className="author text-secondary ">
            By
            <a
              className=" author_name text-decoration-none text-dark px-1"
              href="#"
            >
              {data?.author}
            </a>
          </p>
        </div>

        <div className="card-body d-flex justify-content-between align-items-center">
          <a href="#" className="enroll-btn bg-warning text-dark">
            Enroll Now
          </a>
          <p href="#" className="course-price">
            {data?.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Course_item;
