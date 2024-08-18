import React, { useState } from 'react';
import './BookingPage.css'
import BookingForm from '../../components/booking-form/BookingForm';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navigate = useNavigate();
  const [availableTimes, setAvailableTimes] = useState([]);

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
  };

  const submitAPI = function(formData) {
    return true;
  };

  const initializeTimes = () => {
    const today = new Date();
    const times = fetchAPI(today);
    setAvailableTimes(times);
  };

  const updateTimes = (date) => {
    const times = fetchAPI(date);
    setAvailableTimes(times);
  };

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmation-page');
    }
  };

  return (
    <section className="booking-page-box">
        <div className="booking-page-wrapper">
            <h1 className='booking-page-title'>Reserve a Table</h1>
            <BookingForm
                availableTimes={availableTimes}
                initializeTimes={initializeTimes}
                updateTimes={updateTimes}
                submitForm={submitForm}
            />
        </div>
    </section>
  );
};

export default BookingPage;