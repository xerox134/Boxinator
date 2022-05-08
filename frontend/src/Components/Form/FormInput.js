import React from 'react';
import "./FormInput.css";

export default function FormInput(props) {
  const { label, onChange, errorMessage, id, ...inputProps } = props;



  return <div className="formInput">
       <label>{label}</label>
          <input {...inputProps} onChange={onChange} />
          <span>{errorMessage}</span>
          </div>;
}


