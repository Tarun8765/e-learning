import maplogo from "/images/map_marker.svg";
import messagelogo from "/images/envelope.svg";
import { Link } from "react-router-dom";

function TopHeaderLeftSection() {
  return (
    <div className="left col-lg-6">
      <ul
        style={{ paddingLeft: "0" }}
        className="top_header_info d-flex align-items-center m-0"
      >
        <li className="text-white list-inline ">
          <img className="mx-2 " src={maplogo} alt="icon" />
          <span>589 5th Ave, NY 10024, USA</span>
        </li>
        <li className="text-white list-inline d-flex p-2 align-items-center">
          <img
            className="mx-2"
            src={messagelogo}
            alt="icon"
            width="20"
            height="20"
          />
          <a
            className="text-decoration-none text-white"
            href="https://www.gmail.com"
            target="black"
          >
            info@skillgrodemo.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TopHeaderLeftSection;
