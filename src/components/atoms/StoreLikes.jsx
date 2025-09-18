import { href } from "react-router-dom"


function StoreLikes({alt,src,href,divClass,imgClass}) {
  return (
<div  className={divClass}>
    <a  width="157" height="51" target="black" href={href}>
        <img className={imgClass} src={src} alt={alt} />
    </a>
</div>
  )
}

export default StoreLikes