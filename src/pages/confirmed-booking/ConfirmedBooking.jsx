import React from 'react'
import { Link } from 'react-router-dom'
import './ConfirmedBooking.css'

const ConfirmedBooking = () => {
  return (
    <section className='confirmed-booking flex flex-col justify-center'>
        <h1 className='text-5xl uppercase font-bold'>Booking Confirmed</h1>
        <h2 className='text-3xl font-bold'>Thank you for reserving a table on Little Lemon!</h2>
        <div className="form-btn-box">
            <button className="form-btn-box">
                <Link to='/'>Home</Link>
            </button>
        </div>
    </section>
  )
}

export default ConfirmedBooking