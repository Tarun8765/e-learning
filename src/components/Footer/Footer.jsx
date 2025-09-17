import "../Footer/Footer.css";
import logo from  "/images/logo.svg"
function Footer() {
  return (
    <footer className="footer_area ">
      <div className="footer_top">
        <div className="Container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer__widget">
                <div className="logo mb-35">
                  <a href="index.html">
                    <img src={logo}alt="img"></img>
                  </a>
                </div>
              </div>
              <div className="footer__content">
              <p>"when an unknown printer took galley of type and scrambled it to make pspecimen bookt has"</p>
              <ul className="list-warp">
              <li>463 7th Ave ,NY 10018,USA</li>
              <li>+123 88 9900 456</li>
              </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6"></div>
            <div className="col-xl-3 col-lg-4 col-md-6"></div>
          </div>
        </div>
      </div>

      {/* Footer bottom  */}
      <div class="footer_bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7">
              <div class="copy-right-text">
                <p>© 2010-2024 skillgro.com. All rights reserved.</p>
              </div>
            </div>
            <div class="col-md-5">
              <div class="footer_bottom-menu">
                <ul class="list-warp">
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
