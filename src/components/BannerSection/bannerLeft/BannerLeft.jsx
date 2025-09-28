import "../bannerLeft/bannerLeft.css";

function bannerleft() {
  return (
    <div className=" banner-left col-xl-5 col-lg-6">
      <div className="banner_content">
        <h3 className="title tg-svg aos-init aos-animate">
          Never Stop
          <span className="position-relative  text-light " style={{}}>
            <span className="svg-icon " id="banner-svg"></span>
            <svg
              style={{
                width: "191.275px",
                height: "48.8px",
                color: "#ffc224",
                position: "absolute",
              }}
              x="0px"
              y="0px"
              preserveAspectRatio="none"
              viewBox="0 0 209 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565"
                fill="currentcolor"
              ></path>
            </svg>
            Learning
          </span>
          <br />
          life
          <strong> Never Stop</strong>
          Teaching
        </h3>
        <p className="aos-init ">
          Every teaching and learning journey is unique Following We'll help
          guide your way.
        </p>
        <div className="banner_btn-wrap d-flex justify-content-center align-items-center">
          <a
            className="d-flex justify-content-center align-items-center gap-3"
            href="#"
          >
            Start Free Trial
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              data-inject-url="https://html.themegenix.com/skillgro/assets/img/icons/right_arrow.svg"
              class="injectable  text-light "
            >
              <path
                d="M1 7L15 7M15 7L9 1M15 7L9 13"
                stroke="currentcolor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M1 7L15 7M15 7L9 1M15 7L9 13"
                stroke="currentcolor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default bannerleft;
