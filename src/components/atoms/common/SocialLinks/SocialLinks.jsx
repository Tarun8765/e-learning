import "../SocialLinks/socialLinks.css";
import { SocialIcon } from "react-social-icons";
import linkItems from "../../../data/navItems.json";
import { Link } from "react-router-dom";
function SocialLinks() {
  return (
    <div className="instuctor_social">
      <ul className="list-wrap d-flex align-items-center">
        {linkItems?.SocialLinks?.map((item, index) => {
          return (
            <li key={index} className="">
              <i
                style={{ width: "30px", height: "30px" }}
                className="Linksitems"
                href="#"
              >
                <i>
                  <SocialIcon
                    className="socialLinks"
                    fgColor="#7F7E97"
                    bgColor="transparent"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50px",
                      border: " 1px solid #7F7E97",
                    }}
                    url={item.url}
                  />
                </i>
              </i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
