import "../courseNav/courseNav.css";
function CourseNav() {
  return (
    <div className="course_nav container d-block">
      <ul className="nav border-0 nav-tab list-styled-none">
        <li className="nav_item">
          <a className=" nav_link border-0">All Courses</a>
        </li>
        <li className="nav_item">
          <a className="nav_link border-0 b-secodary"> Design</a>
        </li>
        <li className="nav_item">
          <a className=" nav_link border-0"> Business</a>
        </li>
        <li className="nav_item">
          <a className="nav_link border-0"> Development</a>
        </li>
      </ul>
    </div>
  );
}

export default CourseNav;
