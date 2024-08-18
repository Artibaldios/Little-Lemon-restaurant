import React from 'react'
import { Link } from 'react-router-dom'
import './MobileNavBar.css'

const MobileNavBar = ({isVisible}) => {
  return (
    <nav className={isVisible ? "active" : "disabled"}>
      <ul className='mobile-navbar'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            About
        </li>
        <li>
            Menu
        </li>
        <li>
            <Link to="/booking">Reservations</Link>
        </li>
        <li>
            Order Online
        </li>
      </ul>
    </nav>
  )
}

export default MobileNavBar