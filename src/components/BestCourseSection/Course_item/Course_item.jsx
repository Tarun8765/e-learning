import img from "../../../../public/images/courseSlider/course_thumb01.jpg";
import "../Course_item/course_item.css";

function Course_item({ data }) {
  console.log("Data", data);
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

// <div className=" course_item shine_animate-icon border px-4 py-4 mx-4">
//   <div className="course-item-thumb ">
//     <a className="w-100" href="#">
//       <img className=" w-100 rounded-3" src={img} alt="thumb-image" />
//     </a>
//   </div>
//   <div className="  course-item-content">
//     <ul className="course_item-meta list-wrap  d-flex justify-content-between align-items-center mt-3">
//       <li className="courses_item-tag px-3 ">
//         <a className="text-dark text-decoration-none" href="#">
//           Developement
//         </a>
//       </li>
//       <li className="avg-rating">(4.8 Reviews)</li>
//     </ul>
//     <h5 className="title my-2">
//       <a href="#">Learning JavaScirpt with Imagination</a>
//     </h5>
//     <p className="author text-secondary ">
//       By
//       <a className="text-decoration-none text-dark px-1" href="#">
//         David Millar
//       </a>
//     </p>
//     <div className="course_item-bottom d-flex ">
//       <div className="button">
//         <a href="#">
//           <span className="text">Enroll Now </span>
//           <i className=""> </i>
//         </a>
//       </div>
//       <h5 className="price">$15.00</h5>
//     </div>
//   </div>
// </div>
export default Course_item;
