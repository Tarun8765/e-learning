import React from 'react'
import Image from '../../atoms/Image/image'
import './BreadcrumbImages.css'

export default function BreadcrumbImages({imageList}) {
  return (
    <div className="breadcrumb_shape-wrap">
        {imageList?.map((data,index)=>{
            return(
                <Image
                    key={index}
                    src={data?.src}
                    alt={data?.alt}
                    imgClass={data?.className}
                />
            )
        })}
    </div>
  )
}
