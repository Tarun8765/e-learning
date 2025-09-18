import navData from "../data/navItems.json";
import SvgTag from "../atoms/SvgTag";
import { Link } from "react-router-dom";
import mainLogo from "../../../public/images/logo.svg";
import search from "../../../public/images/search.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TopHeaderLeftSection from "../molecules/TopHeaderLeftSection/TopHeaderLeftSection";
import TopHeaderRightSection from "../molecules/TopHeaderRightSection/TopHeaderRightSection";
function Header() {
  return (
    <header className="bg-light">
      <div className="header-top d-none d-lg-flex justify-content-between">
        <div className="container-fluid py-1  custome-container">
          <div className="row">
            <TopHeaderLeftSection />
            <TopHeaderRightSection />
          </div>
        </div>
      </div>

      <div id="sticky-header" className="header_area d-flex align-items-center">
        <div className="container custom-container d-flex ">
          <div className="row">
            <div className="col-12">
              <div className="tgmenu_wrap">
                <nav className="tgmenu_nav d-flex">
                  <div className="logo">
                    <img
                      className="image-fluid"
                      src={mainLogo}
                      alt="logo"
                    ></img>
                  </div>
                  <div className="tgmenu-navbar-wrap tgmenu-main-menu d-none d-xl-flex flex-grow-1 ">
                    <ul className="navigation list-unstyled d-flex align-items-center flex-nowrap">
                      {navData?.navLink?.map((items, index) => {
                        return (
                          <li className="menu_items " key={index}>
                            <Link
                              className="text-decoration-none mx-2 text-dark"
                              to={items.route}
                            >
                              {items.itemName}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="tgmenu_search bg-succes d-flex">
                    <form
                      action="#"
                      className="tnmenu__search-form mt-0 d-flex border-1 border-circle p-2 "
                    >
                      <div className="select-gap d-flex justify-content-center align-items-center">
                        {/* <SvgTag className="mx-0" /> */}
                        <svg
                          style={{ marginLeft: "17px ", color: "#5751e1;" }}
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.992 13.25C10.5778 13.25 10.242 13.5858 10.242 14C10.242 14.4142 10.5778 14.75 10.992 14.75V13.25ZM16.992 14.75C17.4062 14.75 17.742 14.4142 17.742 14C17.742 13.5858 17.4062 13.25 16.992 13.25V14.75ZM14.742 11C14.742 10.5858 14.4062 10.25 13.992 10.25C13.5778 10.25 13.242 10.5858 13.242 11H14.742ZM13.242 17C13.242 17.4142 13.5778 17.75 13.992 17.75C14.4062 17.75 14.742 17.4142 14.742 17H13.242ZM1 6.4H1.75H1ZM1 1.6H1.75H1ZM6.4 1V1.75V1ZM7 1.6H6.25H7ZM6.4 7V6.25V7ZM1 16.4H1.75H1ZM1 11.6H1.75H1ZM6.4 11V11.75V11ZM7 11.6H6.25H7ZM6.4 17V17.75V17ZM1.6 17V17.75V17ZM11 6.4H11.75H11ZM11 1.6H11.75H11ZM11.6 1V0.25V1ZM16.4 1V1.75V1ZM17 1.6H17.75H17ZM17 6.4H17.75H17ZM16.4 7V6.25V7ZM10.992 14.75H13.992V13.25H10.992V14.75ZM16.992 13.25H13.992V14.75H16.992V13.25ZM14.742 14V11H13.242V14H14.742ZM13.242 14V17H14.742V14H13.242ZM1.75 6.4V1.6H0.25V6.4H1.75ZM1.75 1.6C1.75 1.63978 1.7342 1.67794 1.70607 1.70607L0.645406 0.645406C0.392232 0.89858 0.25 1.24196 0.25 1.6H1.75ZM1.70607 1.70607C1.67794 1.7342 1.63978 1.75 1.6 1.75V0.25C1.24196 0.25 0.89858 0.392232 0.645406 0.645406L1.70607 1.70607ZM1.6 1.75H6.4V0.25H1.6V1.75ZM6.4 1.75C6.36022 1.75 6.32207 1.7342 6.29393 1.70607L7.35459 0.645406C7.10142 0.392231 6.75804 0.25 6.4 0.25V1.75ZM6.29393 1.70607C6.2658 1.67793 6.25 1.63978 6.25 1.6H7.75C7.75 1.24196 7.60777 0.898581 7.35459 0.645406L6.29393 1.70607ZM6.25 1.6V6.4H7.75V1.6H6.25ZM6.25 6.4C6.25 6.36022 6.2658 6.32207 6.29393 6.29393L7.35459 7.35459C7.60777 7.10142 7.75 6.75804 7.75 6.4H6.25ZM6.29393 6.29393C6.32207 6.2658 6.36022 6.25 6.4 6.25V7.75C6.75804 7.75 7.10142 7.60777 7.35459 7.35459L6.29393 6.29393ZM6.4 6.25H1.6V7.75H6.4V6.25ZM1.6 6.25C1.63978 6.25 1.67793 6.2658 1.70607 6.29393L0.645406 7.35459C0.898581 7.60777 1.24196 7.75 1.6 7.75V6.25ZM1.70607 6.29393C1.7342 6.32207 1.75 6.36022 1.75 6.4H0.25C0.25 6.75804 0.392231 7.10142 0.645406 7.35459L1.70607 6.29393ZM1.75 16.4V11.6H0.25V16.4H1.75ZM1.75 11.6C1.75 11.6398 1.7342 11.6779 1.70607 11.7061L0.645406 10.6454C0.392231 10.8986 0.25 11.242 0.25 11.6H1.75ZM1.70607 11.7061C1.67793 11.7342 1.63978 11.75 1.6 11.75V10.25C1.24196 10.25 0.898581 10.3922 0.645406 10.6454L1.70607 11.7061ZM1.6 11.75H6.4V10.25H1.6V11.75ZM6.4 11.75C6.36022 11.75 6.32207 11.7342 6.29393 11.7061L7.35459 10.6454C7.10142 10.3922 6.75804 10.25 6.4 10.25V11.75ZM6.29393 11.7061C6.2658 11.6779 6.25 11.6398 6.25 11.6H7.75C7.75 11.242 7.60777 10.8986 7.35459 10.6454L6.29393 11.7061ZM6.25 11.6V16.4H7.75V11.6H6.25ZM6.25 16.4C6.25 16.3602 6.2658 16.3221 6.29393 16.2939L7.35459 17.3546C7.60777 17.1014 7.75 16.758 7.75 16.4H6.25ZM6.29393 16.2939C6.32207 16.2658 6.36022 16.25 6.4 16.25V17.75C6.75804 17.75 7.10142 17.6078 7.35459 17.3546L6.29393 16.2939ZM6.4 16.25H1.6V17.75H6.4V16.25ZM1.6 16.25C1.63978 16.25 1.67793 16.2658 1.70607 16.2939L0.645406 17.3546C0.898581 17.6078 1.24196 17.75 1.6 17.75V16.25ZM1.70607 16.2939C1.7342 16.3221 1.75 16.3602 1.75 16.4H0.25C0.25 16.758 0.392231 17.1014 0.645406 17.3546L1.70607 16.2939ZM11.75 6.4V1.6H10.25V6.4H11.75ZM11.75 1.6C11.75 1.63978 11.7342 1.67793 11.7061 1.70607L10.6454 0.645406C10.3922 0.898581 10.25 1.24196 10.25 1.6H11.75ZM11.7061 1.70607C11.6779 1.7342 11.6398 1.75 11.6 1.75V0.25C11.242 0.25 10.8986 0.392231 10.6454 0.645406L11.7061 1.70607ZM11.6 1.75H16.4V0.25H11.6V1.75ZM16.4 1.75C16.3602 1.75 16.3221 1.7342 16.2939 1.70607L17.3546 0.645406C17.1014 0.392231 16.758 0.25 16.4 0.25V1.75ZM16.2939 1.70607C16.2658 1.67793 16.25 1.63978 16.25 1.6H17.75C17.75 1.24196 17.6078 0.898581 17.3546 0.645406L16.2939 1.70607ZM16.25 1.6V6.4H17.75V1.6H16.25ZM16.25 6.4C16.25 6.36022 16.2658 6.32207 16.2939 6.29393L17.3546 7.35459C17.6078 7.10142 17.75 6.75804 17.75 6.4H16.25ZM16.2939 6.29393C16.3221 6.2658 16.3602 6.25 16.4 6.25V7.75C16.758 7.75 17.1014 7.60777 17.3546 7.35459L16.2939 6.29393ZM16.4 6.25H11.6V7.75H16.4V6.25ZM11.6 6.25C11.6398 6.25 11.6779 6.2658 11.7061 6.29393L10.6454 7.35459C10.8986 7.60777 11.242 7.75 11.6 7.75V6.25ZM11.7061 6.29393C11.7342 6.32207 11.75 6.36022 11.75 6.4H10.25C10.25 6.75804 10.3922 7.10142 10.6454 7.35459L11.7061 6.29393Z"
                            fill="currentcolor"
                          ></path>
                        </svg>
                        <select
                          className="border-0 form_select"
                          name="choise"
                          id="choise"
                        >
                          <option value={"Categories"}>Categories</option>
                          <option value={"Businees"}>Businees</option>
                          <option value={"AI-ML"}>AI-ML</option>
                          <option value={"Art-and-Desing"}>
                            Art-and-Desing
                          </option>
                          <option value={"Finance"}>Finance</option>
                        </select>
                      </div>
                      <div className="input-gap d-flex">
                        <input
                          id="search-input"
                          className="search-input position-relative"
                          type="text"
                          placeholder="Search For Course...."
                          style={{
                            border: "none",
                            outline: "none",
                          }}
                        />

                        <button
                          className=" search-btn border rounded-circle text-white p-1"
                          type="submit"
                        >
                          <span>btn</span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="tgmenu_action">
                    <ul className="list-wrap list-unstyled d-flex ">
                      <li
                        className="wishlist-icon border-2
                      p-3 mx-2 rounded-circle"
                      >
                        <a href="#" className="d-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 22 22"
                            fill="none"
                            data-inject-url="https://html.themegenix.com/skillgro/assets/img/icons/heart.svg"
                            className="injectable text-dark "
                          >
                            <path
                              d="M10.7554 4.61133L9.79142 3.62048C7.52872 1.2946 3.37978 2.09723 1.88208 5.02139C1.17893 6.39675 1.02029 8.38249 2.30423 10.9168C3.54111 13.3569 6.11437 16.2797 10.7554 19.4634C15.3964 16.2797 17.9683 13.3569 19.2065 10.9168C20.4905 8.38115 20.3332 6.39675 19.6287 5.02139C18.131 2.09723 13.982 1.29326 11.7193 3.61914L10.7554 4.61133ZM10.7554 21.0834C-9.85892 7.46155 4.40828 -3.17028 10.5188 2.45351C10.5994 2.52745 10.6787 2.60409 10.7554 2.68341C10.8312 2.60416 10.9102 2.52791 10.992 2.45485C17.1011 -3.17297 31.3697 7.4602 10.7554 21.0834Z"
                              fill="currentcolor"
                            ></path>
                          </svg>
                          <span class="wishlist-count bg-warning border rounded-circle p-1"></span>
                        </a>
                      </li>
                      <li
                        className="mini-chart-icon border 
                      p-3 mx-2 rounded-circle"
                      >
                        <a href="#" className="d-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            data-inject-url="https://html.themegenix.com/skillgro/assets/img/icons/cart.svg"
                            class="injectable text-dark"
                          >
                            <path
                              d="M19.4853 6.2598C19.2241 5.93213 18.8323 5.74415 18.4102 5.74415H14.6011L12.5355 1.01447C12.4075 0.721229 12.0659 0.587219 11.7726 0.715357C11.4793 0.843418 11.3454 1.18503 11.4735 1.47831L13.3365 5.74419H6.44249L8.30546 1.47831C8.43352 1.18503 8.29963 0.843457 8.00634 0.715357C7.7131 0.587219 7.37148 0.721152 7.24342 1.01447L5.17787 5.74419H1.36873C0.946649 5.74419 0.554817 5.93213 0.293635 6.25984C0.0372424 6.58155 -0.0573642 6.99513 0.0340748 7.39465L2.06825 16.2797C2.2103 16.9001 2.75913 17.3334 3.40291 17.3334H16.376C17.0198 17.3334 17.5686 16.9001 17.7107 16.2797L19.7449 7.39461C19.8363 6.99509 19.7417 6.58151 19.4853 6.2598ZM16.376 16.1745H3.40291C3.30452 16.1745 3.21833 16.1099 3.19797 16.021L1.16379 7.13602C1.14784 7.06629 1.17461 7.01383 1.19995 6.98211C1.22344 6.9526 1.27663 6.90311 1.36873 6.90311H4.67177L4.51999 7.25068C4.39193 7.54396 4.52583 7.88553 4.81911 8.01363C4.8946 8.04662 4.97325 8.06223 5.0507 8.06223C5.27406 8.06223 5.48692 7.93231 5.58203 7.71455L5.93639 6.90319H13.8426L14.197 7.71455C14.2921 7.93235 14.505 8.06223 14.7283 8.06223C14.8057 8.06223 14.8844 8.04662 14.9599 8.01363C15.2532 7.88557 15.3871 7.54396 15.259 7.25068L15.1073 6.90311H18.4103C18.5024 6.90311 18.5556 6.9526 18.5791 6.98211C18.6044 7.01387 18.6312 7.06633 18.6152 7.13598L16.5811 16.0211C16.5607 16.1099 16.4744 16.1745 16.376 16.1745Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M6.41271 9.41407C6.09269 9.41407 5.83324 9.67352 5.83324 9.99354V14.2429C5.83324 14.5629 6.09269 14.8224 6.41271 14.8224C6.73272 14.8224 6.99217 14.5629 6.99217 14.2429V9.99354C6.99217 9.67352 6.73276 9.41407 6.41271 9.41407Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M9.88947 9.41407C9.56946 9.41407 9.31001 9.67352 9.31001 9.99354V14.2429C9.31001 14.5629 9.56946 14.8224 9.88947 14.8224C10.2095 14.8224 10.4689 14.5629 10.4689 14.2429V9.99354C10.4689 9.67352 10.2095 9.41407 9.88947 9.41407Z"
                              fill="currentcolor"
                            ></path>
                            <path
                              d="M13.3662 9.41407C13.0462 9.41407 12.7868 9.67352 12.7868 9.99354V14.2429C12.7868 14.5629 13.0462 14.8224 13.3662 14.8224C13.6863 14.8224 13.9457 14.5629 13.9457 14.2429V9.99354C13.9457 9.67352 13.6863 9.41407 13.3662 9.41407Z"
                              fill="currentcolor"
                            ></path>
                          </svg>
                          <span class="wishlist-count"></span>
                        </a>
                      </li>
                      <li className="header-btn login-btn text-dark ">
                        <a
                          href="#"
                          className="text-decoration-none d-flex text-dark mx-3 my-1 fw-bold"
                        >
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
