import React, { useState } from 'react'
import './ContactSection.css'
import Map from '../../atoms/Map/Map'
import Call from '../../atoms/Icons/Call'
import Inbox from '../../atoms/Icons/Inbox'
import Location from '../../atoms/Icons/Location'
import Button from '../../atoms/Button/Button'
import RightArrow from '../../atoms/Icons/RightArrow'
import Input from '../../atoms/input/Input'

export default function ContactSection() {
   const data = [{
    icon:<Location />,
    title:'Address',
    content:'Supertech Capetown, Sector 74, Noida'
   },
   {
    icon:<Call />,
    title:'Phone',
    contact:[
        {
            number:'8810338340',
        },
        {
            number:'8115457797',
        }
    ]
   },
   {
    icon:<Inbox />,
    title:'E-mail Address',
    contact:[
        {
            email:'info@mylearningsteps.com',
        },
        {
            email:'hr@mylearningsteps.com',
        }
    ]
   }

]
    
    const handleSubmit = () =>{

    }
    const onChange = () => {

    }
    const [inputData,setInputData] = useState([
        {
            name:'message', 
            placeholder:'Comment',
            onChange:onChange, 
            value : '',
            textAreaStatus:true
        },
        {
            type:'text', 
            name:'name', 
            placeholder:'Name *',
            onChange:onChange, 
            value : '',
            required:true
        },
        {
            type:'text', 
            name:'email', 
            placeholder:'E-mail *',
            onChange:onChange, 
            value : '',
            required:true
        },
        {
            type:'text', 
            name:'phone', 
            placeholder:'Phone *',
            onChange:onChange, 
            value : '',
            required:true
        }
    ]);
  return (
    <section className="contact-area py-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact-info-wrap">
                            <ul className="list-wrap">
                                {data.map((data, index)=>{
                                    return(
                                        <li key={index}>
                                            <div className="icon">
                                                {data?.icon}
                                            </div>
                                            <div className="content">
                                                <h4 className="title">{data?.title}</h4>
                                                {data?.content ? <p>{data?.content}</p> : ''}
                                                {data?.contact?.map((contactData,index)=>{
                                                    return(
                                                        <a key={index} href={contactData?.number ? `tel:${contactData?.number}`:`mailto:${contactData?.email}`}>{contactData?.number ? contactData?.number :''} {contactData?.email ? contactData?.email :''}</a>
                                                    )
                                                })}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="contact-form-wrap">
                            <h4 className="title">Send Us Message</h4>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <form id="contact-form" action="assets/mail.php" method="POST">
                                {inputData?.filter((data) => data?.textAreaStatus)?.map((data, index) => ( 
                                    <Input
                                        key={index}
                                        name={data?.name}
                                        placeholder={data?.placeholder}
                                        onChange={data?.onChange}
                                        textAreaStatus={data?.textAreaStatus}
                                        value={data?.value}
                                    />
                                ))}
                                
                                <div className="row">
                                    {inputData?.filter((data) => !data?.textAreaStatus)?.map((data, index) => {
                                        return(
                                            <div className="col-md-4" key={index}>
                                                <Input                                                
                                                    name={data?.name}
                                                    placeholder={data?.placeholder}
                                                    onChange={data?.onChange}
                                                    type={data?.type}
                                                    value={data?.value}
                                                    required={data?.required}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                                <Button 
                                    className='btn_secondary hoverChange' 
                                    type='sublit' 
                                    text='Submit Now' 
                                    iconStatus={true}
                                    icon={<RightArrow />}
                                    clickHandler={handleSubmit}
                                />
                            </form>
                            <p className="ajax-response mb-0"></p>
                        </div>
                    </div>
                </div>
               
                <Map />
               
            </div>
        </section>
  )
}
