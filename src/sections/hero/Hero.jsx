import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import Slider from "../../components/slider/slider"

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
      <Slider></Slider>
    </section>
  )
}

export default Hero