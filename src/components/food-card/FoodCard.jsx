import React from 'react'
import './FoodCard.css'

const FoodCard = ({food}) => {
  const {name, price, image, description} = food;
  return (
    <div className='food-card'>
        <div className='food-card-wrapper'>
            <div className='food-card-img-box'>
                <img src={image} alt={name} className='food-card-img' />
            </div>
            <div className='food-card-description'>
                <div className='food-card-wrapper2'>
                    <h2 className='food-card-name'>{name}</h2>
                    <h4 className='food-card-price'>{price}</h4>
                </div>
                <p className='food-card-text'>{description}</p>
            </div>
        </div>
        <div className='food-card-btn-box'>
            <button className='food-card-btn'>Order a delivery</button>
        </div>
    </div>
  )
}

export default FoodCard