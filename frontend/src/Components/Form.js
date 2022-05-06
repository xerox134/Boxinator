import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { PhotoshopPicker } from 'react-color';
import '../App.css'

export default function Form() {

const {register,handleSubmit} = useForm();
const [color,setColor]= useState('#fff')
const [show, setShow] = useState(false);


const onSubmit=(data)=>{
  
 data.color=color

 if(data.h>167&&data.h<255){
   alert("BLUE Colors are not accepted!")
 }
  console.log(data)
}

const validateColor=(hsl,rgb)=>{
  
 

 if(hsl.h>167&&hsl.h<255){
   alert("BLUE Colors are not accepted!")
 }else{setColor(rgb)}
}
  return (
    <div className='form-content-right'>

   <form className='form' onSubmit={handleSubmit(onSubmit)}>

     

      <h1> Send box</h1>

      <div className='form-inputs'>
        <label className='form-label'>Name</label>
       
        <input
          className='form-input'
          type='text'
          placeholder='Enter reciver name'
          {...register('name', { required: true })}
       
        
        />
      
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Weight</label>
        <input
          className='form-input'
          type='number'
          placeholder='Enter the weight in Kg'
          min="0"
          {...register('weight', { required: true })}
         
        />

      </div>   
      <div className='test'>
        <div>
        <label className='form-label'>Color</label>
      <button onClick={() => setShow(prev => !prev)}>Open color picker!</button></div>
      {show &&  
        <PhotoshopPicker   color={color} onChange={updatedColor=>{
        validateColor(updatedColor.hsl,updatedColor.rgb)}}  />

      }
       </div>
    
      
       <div className='form-inputs'>
        <label className='form-label'>Country</label>
        <select {...register('Country', { required: true })} >
          <option value="Sweden">Sweden</option>
          <option value="China">China</option>
          <option value="Brazil">Brazil</option>
          <option value="Australia">Australia</option>
        </select>

      </div>
    
      <button className='form-input-btn' type='submit'>Send</button>
    </form>
  </div>

)

// Conversion from rgb to hsl. My definition of blue is h in hsl between 167-270
// Ref: https://www.30secondsofcode.org/js/s/rgb-to-hsl
// const RGBToHSL = (r, g, b) => {
//   r /= 255;
//   g /= 255;
//   b /= 255;
//   const l = Math.max(r, g, b);
//   const s = l - Math.min(r, g, b);
//   const h = s
//     ? l === r
//       ? (g - b) / s
//       : l === g
//       ? 2 + (b - r) / s
//       : 4 + (r - g) / s
//     : 0;
//   return [
//     60 * h < 0 ? 60 * h + 360 : 60 * h,
//     100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
//     (100 * (2 * l - s)) / 2,
//   ];
// };
}
