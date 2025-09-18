import { SocialIcon } from "react-social-icons";

function SocialLinks({ href = "#", url = "" }) {
  if (url) {
    return (
      <SocialIcon
        target="blank"
        className="shadow-lg"
        href={href}
        fgColor="white"
        bgColor="#161439"
        url={url}
        style={{ height: "31px", width: "31px" }}
      />
    );
  } else {
    return null;
  }
}

export default SocialLinks;
