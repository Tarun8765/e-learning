import React from 'react'
import './Input.css';

export default function Input({type, name, placeholder,required=false, id, className,onChange, inputWraperClass , textAreaStatus = false, value}) {
  return (
    <div className={`form_grp mb-20 ${inputWraperClass ? inputWraperClass : '' }`}>
        {textAreaStatus ? 
             <textarea className={className ? className :''} id={id ? id :'' }  name={name}  placeholder={placeholder} required={required} onChange={onChange} defaultValue={value}></textarea>
        :
            <input className={className ? className :''} id={id ? id :'' } name={name} type={type ? type :'text' } placeholder={placeholder} required={required} onChange={onChange} defaultValue={value}/>
        }
    </div>
  ) 
}
