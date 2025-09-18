import SocialLinkList from "../SocialLinkList/SocialLinkList";
import { Link } from "react-router-dom";
function TopHeaderRightSection() {
  return (
    <div className="right col-lg-6 max-w-full  d-flex justify-content-end">
      <div className="top_header_right d-flex text-white d-flex align-items-center ">
        <div className="top_header_phone">
          <img src="/images/phone.svg" alt="phone icon" className="mx-1" />
          Call Us:
          <Link
            className="text-white mx-2 text-decoration-none"
            to="tel:0123456355"
          >
            +91 88585785695
          </Link>
        </div>
        <div
          style={{ fontWeight: "500" }}
          className="text-secondary text-align-center "
        >
          Follow Us On :
        </div>
        <SocialLinkList />
      </div>
    </div>
  );
}

export default TopHeaderRightSection;
