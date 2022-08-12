import React from 'react'
import "./FormGroup.css"




export const FormGroup = ({ id, label, register, error, placeholder, type }) => {
   return (
       <div className={"form-group w-100 mb-3"}>
           {
               label ? (
                   <label htmlFor={id}>{label}</label>
               ) : null
           }
           <input id={id} className={error === undefined ? "form-control" : "form-control error"} type={type}  {...register} placeholder={placeholder} />
           {
               error !== undefined ? (
                   <p style={{color: "#e54e53"}}>{error.message}</p>
               ) : null
           }
       </div>
   )
}