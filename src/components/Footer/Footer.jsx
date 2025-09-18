import "../Footer/Footer.css";
import logo from "/images/white_logo.svg";
import FooterData from "../data/FooterData.json";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import FooterHeading from "../atoms/FooterHeading/FooterHeading";
import AppLink from "../../../public/images/apple-store.svg";
import googleLink from "../../../public/images/google-play.svg";
import StoreLikes from "../atoms/StoreLikes";
import SocialLinks from "../atoms/SocialLinks";
function Footer() {
  return (
    <footer className="footer_area ">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer__widget ">
                <div className="logo mb-35">
                  <a href="/">
                    <img src={logo} alt="img"></img>
                    {/* <Logo /> */}
                  </a>
                </div>
                <div className="footer__content float-">
                  <p>
                    when an unknown printer took galley of type and scrambled it
                    to make pspecimen bookt has
                  </p>
                  <ul className="footer_contect_list">
                    <li>463 7th Ave ,NY 10018,USA</li>
                    <li>
                      <a href="tel:+91-8810338340">8810338340</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget">
                <FooterHeading text="Useful Links" />
                <div className="footer__link">
                  <ul className="list-wrap list-unstyled">
                    {FooterData?.usefullLinks?.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="footer_links text-decoration-none"
                            to={item.href}
                          >
                            {item.content}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget">
                <FooterHeading text="Our Company" />
                <div className="footer__link">
                  <ul className="list-wrap list-unstyled">
                    {FooterData?.ourCompany?.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="footer_links text-decoration-none"
                            to={item.href}
                          >
                            {item.content}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer__widget  ">
                <FooterHeading text="Get in Touch" />
                <div className="footer__contact-content">
                  <div className="d-flex flex-column ">
                    <p className="w-100 mt-2">when an unknown printer took</p>
                    <p className="w-100">galley teye and scrambled</p>
                  </div>
                  <ul className="list-wrap footer__social list-unstyled d-flex my-3">
                    {FooterData?.foot_Links?.map((item, index) => {
                      return (
                        <li key={index} style={{marginBottom:"10px"}}>
                          {/* <Link className="footer_links  text-decoration-none"  to={item.href} >{item.content}</Link> */}
                          <SocialIcon
                            style={{ width: "30px", height: "30px" }}
                            fgColor="#6d6c80"
                            bgColor="#06042e"
                            url={item.href}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="app-download d-flex list-unstyled ">

                  <StoreLikes  
                    src={googleLink}
                    href={"https://play.google.com/store/"}
                    alt={" google-store"}
                  />

                  <StoreLikes
                    src={AppLink}
                    href={"https://www.apple.com/in/app-store/"}
                    alt={"apple-playstore"}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom  */}
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="copy-right-text">
                <p>© 2010-2024 skillgro.com. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="footer_bottom-menu">
                <ul className="list-warp float-end ">
                  <li>
                    <a href="#">Term of Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
