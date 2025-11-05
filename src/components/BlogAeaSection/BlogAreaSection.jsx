import "./BlogAreaSection.css";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import TitleHead from "../BestCourseSection/CourseHead/CourseHead";
function NewsBlogSection() {
  return (
    <section className="blog_area">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 d-flex justify-content-center align-item-center">
            <TitleHead
              subTitle={"News & Blogs"}
              title={"Our Latest News Feed"}
              desciption={
                "when known printer took a galley of type scrambl edmake"
              }
            />
          </div>
        </div>
        <div className="row gutter-20">
          <div className="col-xl-3 col-md-6">
            <div className="blog_post-item card p-4">
              <div className="blog_post-thumb position-relative">
                <a href="#" className="Shine_animate-link">
                  <img src="/images/blogArea/blog_post01.jpg" alt="blogimg" />
                </a>
                <a href="#" className="post-tag position-absolute">
                  Marketing
                </a>
              </div>
              <div className="blog_post-content card-body">
                <div className="blog_post-meta">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon">
                        <IoCalendarClearOutline />
                      </i>
                      20 july, 2024
                    </li>
                    <li>
                      <i className="flaticon">
                        <FaRegCircleUser />
                      </i>
                      by
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href=""
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="title">
                  <a href="#">
                    How To Become idiculously Self-Aware In 20 Minutes
                  </a>
                </h4>
              </div>
            </div>
          </div>{" "}
          <div className="col-xl-3 col-md-6">
            <div className="blog_post-item card p-4">
              <div className="blog_post-thumb position-relative">
                <a href="#" className="Shine_animate-link">
                  <img src="/images/blogArea/blog_post01.jpg" alt="blogimg" />
                </a>
                <a href="#" className="post-tag position-absolute">
                  Marketing
                </a>
              </div>
              <div className="blog_post-content card-body">
                <div className="blog_post-meta">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon">
                        <IoCalendarClearOutline />
                      </i>
                      20 july, 2024
                    </li>
                    <li>
                      <i className="flaticon">
                        <FaRegCircleUser />
                      </i>
                      by
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href=""
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="title">
                  <a href="#">
                    How To Become idiculously Self-Aware In 20 Minutes
                  </a>
                </h4>
              </div>
            </div>
          </div>{" "}
          <div className="col-xl-3 col-md-6">
            <div className="blog_post-item card p-4">
              <div className="blog_post-thumb position-relative">
                <a href="#" className="Shine_animate-link">
                  <img src="/images/blogArea/blog_post01.jpg" alt="blogimg" />
                </a>
                <a href="#" className="post-tag position-absolute">
                  Marketing
                </a>
              </div>
              <div className="blog_post-content card-body">
                <div className="blog_post-meta">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon">
                        <IoCalendarClearOutline />
                      </i>
                      20 july, 2024
                    </li>
                    <li>
                      <i className="flaticon">
                        <FaRegCircleUser />
                      </i>
                      by
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href=""
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="title">
                  <a href="#">
                    How To Become idiculously Self-Aware In 20 Minutes
                  </a>
                </h4>
              </div>
            </div>
          </div>{" "}
          <div className="col-xl-3 col-md-6">
            <div className="blog_post-item card p-4">
              <div className="blog_post-thumb position-relative">
                <a href="#" className="Shine_animate-link">
                  <img src="/images/blogArea/blog_post01.jpg" alt="blogimg" />
                </a>
                <a href="#" className="post-tag position-absolute">
                  Marketing
                </a>
              </div>
              <div className="blog_post-content card-body">
                <div className="blog_post-meta">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon">
                        <IoCalendarClearOutline />
                      </i>
                      20 july, 2024
                    </li>
                    <li>
                      <i className="flaticon">
                        <FaRegCircleUser />
                      </i>
                      by
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href=""
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="title">
                  <a href="#">
                    How To Become idiculously Self-Aware In 20 Minutes
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsBlogSection;
