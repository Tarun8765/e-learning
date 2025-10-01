import "../CourseHead/courseHead.css";
function CourseHead({
  subTitle,
  title,
  desciption,
  classSection,
  classSubTitle,
  classTitle,
  classDescription,
}) {
  return (
    <div
      className={
        classSection ? classSection : "section_title text-center mb-40 "
      }
    >
      <div className={classSubTitle ? classSubTitle : "d-block sub-title"}>
        <span className="px-4">{subTitle}</span>
      </div>

      <h2 className={classTitle ? classTitle : "title"}>{title}</h2>

      <p className={classDescription ? classDescription : "desc"}>
        {desciption}
      </p>
    </div>
  );
}

export default CourseHead;
