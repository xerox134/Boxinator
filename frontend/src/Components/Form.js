import React from 'react';
import useForm from './useForm';
import validateInfo from './validateInfo';

export default function Form() {

    const {handleChange, values, handleSubmit, errors}=useForm(validateInfo);

  return (
    <div className='form-content-right'>

   <form className='form' onSubmit={handleSubmit}>
      <h1>
        Send box
      </h1>
      <div className='form-inputs'>
        <div className='form-label'>Name</div>
        <input
          className='form-input'
          type='text'
          name='name'
          placeholder='Enter reciver name'
          value={values.name}
          onChange={handleChange}
        
        />
        {errors.name && <p>{errors.name}</p>}
      
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Weight</label>
        <input
          className='form-input'
          type='number'
          name='weight'
          placeholder='Enter the weight in Kg'
          value={values.weight}
          min="0"
          onChange={handleChange}
         
        />
                {errors.weight && <p>{errors.weight}</p>}

      </div>
      <div className='form-inputs'>
        <label className='form-label'>Password</label>
        <input
          className='form-input'
          type='password'
          name='password'
          placeholder='Enter your password'
          value={values.password}
          onChange={handleChange}
         
        />
                {errors.password && <p>{errors.password}</p>}

      </div>
      <div className='form-inputs'>
        <label htmlFor='password2' className='form-label'>Confirm Password</label>
        <input
          className='form-input'
          id='password2'
          type='password'
          name='password2'
          placeholder='Confirm your password'
          value={values.password2}
          onChange={handleChange}
        
        />
                {errors.password2 && <p>{errors.password2}</p>}

      </div>
      <button className='form-input-btn' type='submit'>Send</button>
    </form>
  </div>

)
}
