import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Navbar from '../../components/navbar/Navbar'
import logo from '../../img/Logo.svg'
import MobileNavBar from '../../components/mobile-navbar/MobileNavBar'
import './Header.css'

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header>
        <div className='header-box'>
            <div className='logo-box'>
              <Link to="/">
                <img src={logo} alt="Little lemon logo" className='logo-img' />
              </Link>
            </div>
            {/* burger */}
            <div className='mobile' onClick={handleNav} >
                {mobileNav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            </div>
            <Navbar/>
        </div>
        {/* Mobile menu */}
        <MobileNavBar className='mobile' isVisible={mobileNav} />
    </header>
  )
}

export default Header