import React, { useState, useEffect } from 'react';
import restauranfood from '../../img/restarauntfood.jpg';
import restaurantfood2 from '../../img/restarauntfood2.jpg';
import restaraunt from '../../img/restaurant.jpg';
import './slider.css';

const Slider = () => {
    const images = [
        restauranfood,
        restaurantfood2,
        restaraunt,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">
            <button onClick={prevSlide} className="slider-button">&#9664;</button>
            <div className="slider-container">
                <div className="slider-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img src={image} alt={`Slide ${index + 1}`} className="slider-image" key={index}/>
                    ))}
                </div>
            </div>
            <button onClick={nextSlide} className="slider-button">&#9654;</button>
        </div>
    );
};

export default Slider;