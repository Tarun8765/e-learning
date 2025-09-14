import navData from "../data/navItems.json";
import { Link } from "react-router-dom";
import mainLogo from "../../../public/images/logo.svg";
import TopHeaderLeftSection from "../molecules/TopHeaderLeftSection/TopHeaderLeftSection";
import TopHeaderRightSection from "../molecules/TopHeaderRightSection/TopHeaderRightSection";
function Header() {
  return (
    <header className="bg-primary">
      <div className="header-top d-none d-lg-flex justify-content-between">
        <div className="container-fluid py-1  custome-container">
          <div className="row">
            <TopHeaderLeftSection />
            <TopHeaderRightSection />
          </div>
        </div>
      </div>
      {"top header section"}
      <div id="sticky-header" className="header_area">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="tgmenu_wrap">
                <nav className="tgmenu_nav">
                  <div className="logo">
                    <img src={mainLogo} alt="logo"></img>
                  </div>
                  <div className="tgmenu-navbar-wrap tgmenu-main-menu d-none d-xl-flex">
                    <ul className="navigation">
                      {navData?.navLink?.map((items, index) => {
                        return (
                          <li key={index}>
                            <a href={items.route}>{items.itemName}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <ul>
                    <li></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar container d-flex align-items-center ">
        <div>
          <ul className=" d-none d-md-flex list-unstyled mb-0 ">
            {navData?.navLink?.map((item, index) => {
              return (
                <li key={index} className="px-2 ">
                  <Link
                    className="text-decoration-none text-white text-weight-100"
                    to={item.route}
                  >
                    {item.itemName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="d-flex ">
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="d-sm-none d-inline">
            <button className="btn  bg-primary text-white m-1">
              login/Register
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
