import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='Header'>
      <nav>
        <h1><Link to='/'>Siremar</Link></h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/contacts'>Contact</Link></li>
          <li><Link to='/login_registration'>Login/Register</Link></li>


          <li><Link to='/Admin'>Admin</Link></li>
          <li><Link to='/Inspector'>Inspector</Link></li>
          <li><Link to='/Resident'>Residents</Link></li>

        </ul>
      </nav>
    </header>
  )
}

export default Header