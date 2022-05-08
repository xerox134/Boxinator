//////////
import React, { useState } from 'react';

import "./FormInput.css";
import { PhotoshopPicker } from "react-color";

export default function FormInput(props) {
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const [color, setColor] = useState();

    const handleOnChange=(e,m)=>{
       

console.log("inside",e)
console.log("inside",m)
onChange(m)
    }

  const renderForms = () => {
    if (id === 1) {
      return (
        <div>
          <label>{label}</label>
          <input {...inputProps} onChange={onChange} />
          <span>{errorMessage}</span>
        </div>
      );
    } else if (id === 2) {
      return (
        <div>
          <label>{label}</label>
          <input {...inputProps} onChange={onChange} />
          <span>{errorMessage}</span>
        </div>
      );
    } else if (id === 3) {
      return (
        <div>
          <label>{label}</label>
          <div>
          <PhotoshopPicker color={color} onChange={handleOnChange} /></div>
          <span>{errorMessage}</span>
        </div>
      );
    } else if (id === 4) {
      return (
        <div>
          <label>{label}</label>
          <select {...inputProps} onChange={onChange}>
            <option value="Sweden">Sweden</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
            <option value="Australia">Australia</option>
          </select>
          <span>{errorMessage}</span>
        </div>
      );
    } else {
    }
  };

  return <div className="formInput">{renderForms()}</div>;
}
