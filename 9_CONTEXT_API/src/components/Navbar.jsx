import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <NavLink className="Nav-link" to="/">Home</NavLink>
      <NavLink className="Nav-link" to="/sobre">Sobre</NavLink>
      <NavLink className="Nav-link" to="/contato">Contato</NavLink>
    </div>
  )
}

export default Navbar