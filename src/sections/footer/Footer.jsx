import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='navigation'>
        <h6>Navigation</h6>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className='contacts'>
        <h6>Contacts</h6>
        <ul>
          <li>Tomsons Street, 3/76</li>
          <li>333-4444</li>
          <li>littlelemon@email.com</li>
        </ul>
      </div>
      <div className='socials'>
        <h6>Social Media</h6>
        <ul className='social-icons flex mx-auto mt-2'>
          <li><BsFacebook size={25} /></li>
          <li><BsInstagram size={25} /></li>
          <li><BsTwitter size={25} /></li>
          <li><BsYoutube size={25} /></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer