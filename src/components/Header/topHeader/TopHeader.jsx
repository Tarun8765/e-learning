import TopHeaderLeftSection from "../../molecules/TopHeaderLeftSection/TopHeaderLeftSection";
import TopHeaderRightSection from "../../molecules/TopHeaderRightSection/TopHeaderRightSection";
function TopHeader() {
  return (
    <div
      className="header-top d-none d-lg-flex justify-content-between"
      style={{ backgroundColor: "#161439" }}
    >
      <div className="container py-1  custome-container">
        <div className="row">
          <TopHeaderLeftSection />
          <TopHeaderRightSection />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
