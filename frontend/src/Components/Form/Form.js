import React, { useState } from 'react'
import FormInput from './FormInput'
import './Form.css'

export default function Form() {
  const [values,setValues] = useState({

    reciver:"",
    weight:"",
    color:"",
    country:""

  });

  const inputs =[

    {
      id:1,
      name:"reciver",
      type:"text",
      placeholder:"Reciver",
      errorMessage:"Reciver should be 3-16 characters and shoudnt include any special characters or numbers",
      label:"Reciver",
      pattern:"^[A-Za-z]{3,16}$",
      required:true
    }, 
     {
      id:2,
      name:"weight",
      type:"text",
      placeholder:"Weight",
      errorMessage:"Weight should be positive number, and shouldnt include any special characters, (Max weight:99999kg)",
      label:"Weight",
      pattern:"^[1-9][0-9]{0,4}$",
      required:true

    }, 
     {
      id:3,
      name:"",
      type:"text",
      placeholder:"Color",
      errorMessage:"Please pick a color!",
      label:"Color",
      required:true

    }, 
     {
      id:4,
      name:"country",
      type:"text",
      placeholder:"Country",
      errorMessage:"Please pick a country!",
      label:"Country",
      required:true

    }

  ]

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("SENDING", values)
  }

  const onChange=(e)=>{
    console.log(e)
    setValues({...values, [e.target.name]:e.target.value})
  }

  console.log(values)
  return (
    <div className='form'>
      <h1>Send Box</h1>
      <form onSubmit={handleSubmit}>

      {inputs.map((input)=>(
      <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      ))}
     
      <button>Submit</button>
      </form>

    </div>
  )
}
