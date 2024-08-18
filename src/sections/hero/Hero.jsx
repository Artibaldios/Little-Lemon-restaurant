import React from 'react'
import food from '../../img/restauranfood.jpg'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-box'>

      <div className='description-box'>
        <p className='hero-title'>Little Lemon</p>
        <p className='hero-second-title'>Chicago</p>
        <p className='hero-text'>We are family owned
            Mediterranean restaurant,
            focused on traditional
            recipes served with a modern
            twist
        </p>
        <Link to='/booking'><button className='reserve-btn'>Reserve a Table</button></Link>
      </div>

      <div className='hero-img-box'>
        <img src={food} alt="Restaurant Food" />
      </div>
    </section>
  )
}

export default Hero