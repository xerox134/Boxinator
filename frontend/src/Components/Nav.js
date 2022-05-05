import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Nav() {

  const navStyle = {
    color:'white'
  }

  return (
    <div className='nav'>

        <h3>NAVLIST</h3>
        <ul className='nav-links'>
          <Link style={navStyle} to='/'><li>Home</li></Link>
          <Link style={navStyle} to='/Profile'><li>Profile</li></Link>
          <Link style={navStyle} to='/Login'><li>Login</li></Link>
          <Link style={navStyle} to='/Color'><li>Change Color</li></Link>
          <Link style={navStyle} to='/Store'><li>Store</li></Link>
          <Link style={navStyle} to='/Boxform'><li>BoxForm</li></Link>
          <Link style={navStyle} to='/Boxlist'><li>Boxlist</li></Link>
        </ul>
    </div>
  )
}