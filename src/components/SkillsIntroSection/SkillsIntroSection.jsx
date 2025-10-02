import "../SkillsIntroSection/skillsIntroSection.css";
import CourseHead from "../BestCourseSection/CourseHead/CourseHead";
import skillsData from "../data/navItems.json";
import IntructorWrap from "./IntructorWrap/IntructorWrap";
import Button from "../atoms/Button/Button";
function SkillsIntroSection() {
  return (
    <section className="intructor_area">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-xl-4 mb-5">
            <div className="instructor_content-wrap">
              <CourseHead
                classSection={"flex-direction-column section-head"}
                classSubTitle={"text-start sub-title mb-4"}
                classTitle={"text-start title"}
                classDescription={"text-start"}
                desciption={
                  "when an unknown printer took a galley of type and scrambled makespecimen book has survived not only five centuries"
                }
                title={"Our Top Class & Expert Instructors in One Place"}
                subTitle={"Skilled Introduce"}
              />
              <div className="d-flex mt-2">
                <Button
                  text={"See All Instuctors"}
                  className={"text-white btn-primary mt-4 "}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="instuctor_itemp-wrap">
              <div className="row">
                {skillsData?.skillIntroduce?.map((item, index) => {
                  return (
                    <IntructorWrap
                      key={index}
                      imgScr={item.imgageSrc}
                      title={item.title}
                      avgRating={item.avg_rating}
                      designation={item.designation}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsIntroSection;
