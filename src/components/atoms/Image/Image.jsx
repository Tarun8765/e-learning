import React from 'react'

export default function Image({src,alt,imgClass}) {
  return (
    <img src={src ? src :''} alt={alt ? alt :'' } className={imgClass ? imgClass :''} />
  )
}
