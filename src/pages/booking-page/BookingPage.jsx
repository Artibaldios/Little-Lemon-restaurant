import React, { useReducer } from 'react';
import './BookingPage.css'
import BookingForm from '../../components/booking-form/BookingForm';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navigate = useNavigate();
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
    // create a Date object to represent today's date
    const today = new Date();
    return { times: fetchAPI(today) };
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return { ...state, times: fetchAPI(action.date) };
      default:
        return state;
    };
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());


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
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </div>
    </section>
  );
};

export default BookingPage;