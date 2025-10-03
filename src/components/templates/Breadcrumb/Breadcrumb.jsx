import React, { useState } from 'react'
import './Breadcrumb.css'
import BreadcrumbImages from '../../molecules/BreadcrumbImages/BreadcrumbImages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

export default function Breadcrumb({title, linkList}) {
    const bgImage = '/public/images/breadcrumb/breadcrumb_bg.jpg'
    const imgData = [
        {
            src:'/public/images/breadcrumb/breadcrumb_shape01.svg',
            alt:'breadcrumb_shape01',
            className:'alltuchtopdown'
        },
        {
            src:'/public/images/breadcrumb/breadcrumb_shape02.svg',
            alt:'breadcrumb_shape02',
            className:''
        },
        {
            src:'/public/images/breadcrumb/breadcrumb_shape03.svg',
            alt:'breadcrumb_shape03',
            className:''
        },
        {
            src:'/public/images/breadcrumb/breadcrumb_shape04.svg',
            alt:'breadcrumb_shape04',
            className:''
        },
        {
            src:'/public/images/breadcrumb/breadcrumb_shape05.svg',
            alt:'breadcrumb_shape05',
            className:''
        }
    ]
  return (
    <section className="breadcrumb_area breadcrumb_bg py-100" style={{background:`url(${bgImage})`}} >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb__content">
                            <h3 className="title">{title}</h3>
                            <nav className="breadcrumb">
                                {linkList?.map((data,index)=>{

                                    return( 
                                        <React.Fragment key={index}>
                                            {data?.href ? 
                                            <>
                                                <span className="linkItemListElement">
                                                    <a href={data?.href}>{data?.text}</a>
                                                </span>
                                                <span className="breadcrumb-separator"><FontAwesomeIcon icon={faAngleRight} /></span>
                                            </>
                                            :
                                            <span className="itemListElement">{data?.text}</span>
                                            }

                                        </React.Fragment>
                                    )
                                })}
                                
                                
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <BreadcrumbImages 
                imageList={imgData}
            />
        </section>
  )
}
