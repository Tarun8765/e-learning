import SocialLinks from "../../atoms/SocialLinks/SocialLinks";
import navData from "../../data/navItems.json";

function SocialLinkList() {
  return (
    <ul className="top_social_links list-inline list-wrap d-flex">
      {navData?.navSocialLinks?.map((items, index) => {
        return (
          <li key={index}>
            <SocialLinks url={items.href} href={items?.href} />
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinkList;
