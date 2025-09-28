import "../CourseHead/courseHead.css";
function CourseHead({ subTitle, title, desciption }) {
  return (
    <div className="section_title text-center mb-40 ">
      <div className="d-block sub-title">
        <span className="px-4">{subTitle}</span>
      </div>

      <h2 className="title">{title}</h2>

      <p className="desc">{desciption}</p>
    </div>
  );
}

export default CourseHead;
