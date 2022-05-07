import React from 'react'
import {useDispatch} from 'react-redux'
import {login,logout} from '../Features/user'

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>{
          dispatch(login({name:"pedro", age:20, email:"test@email.com"}))
        }}>Login</button>
        
        <button onClick={()=>{
          dispatch(logout())
        }}>LogOut</button>
    </div>
  )
}

export default Login