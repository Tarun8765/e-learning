import navData from "../data/navItems.json";
function Header() {
  return (
    <header className=" bg-secondary border-botton">
      <nav className="navbar container d-flex align-items-center ">
        <div>
          <a
            className="text-decoration-none text-white text-weight-100"
            href="#"
          >
            Logo
          </a>
        </div>
        <div>
          <ul className=" d-none d-md-flex list-unstyled mb-0 ">
            {navData?.navLink?.map((item, index) => {
              return (
                <li key={index} className="px-2 ">
                  <a
                    className="text-decoration-none text-white text-weight-100"
                    href=""
                  >
                    {item.itemName}
                  </a>
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
