import CourseHead from "./CourseHead/CourseHead";
import CourseNav from "./courseNav/CourseNav";
import "../BestCourseSection/custom.css";

import SlickSlider from "./slider/SlickSlider";

function BestCourseSection() {
  return (
    <section className="courses-area border">
      <div className=" container ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12">
            <div className=" d-flex justify-content-center align-items-center">
              <CourseHead />
            </div>
            <CourseNav />
            <SlickSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
export default BestCourseSection;
