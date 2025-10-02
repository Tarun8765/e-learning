import "../IntructorWrap/instructorWrap.css";
import SocialLinks from "../../atoms/common/SocialLinks/SocialLinks";

function IntructorWrap({ imgScr, title, designation, avgRating }) {
  return (
    <div className="col-md-6">
      <div className="instuctor_item d-flex align-items-center justify-content-center gap-5 mb-5 ">
        <div className="instructor_thumb">
          <a href="#">
            <img src={imgScr} alt="thumb" />
          </a>
        </div>
        <div className="instuctor_content">
          <h2 className="title">
            <a href="#">{title}</a>
          </h2>
          <span className="designation">{designation}</span>
          <p className="avg-rating">
            <i className=""></i>
            &#11088; ({avgRating} Ratings)
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default IntructorWrap;
