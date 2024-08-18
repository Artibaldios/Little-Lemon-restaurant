import React, { useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingForm = ({ submitForm, availableTimes, dispatch }) => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      date: (new Date()).toLocaleDateString("en-CA"),
      time: availableTimes.times[0],
      guests: 1,
      occasion: "birthday",
    },
    onSubmit: (values) => {
      submitForm(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      date: Yup.date().required("Date is required"),
      time: Yup.string().oneOf(availableTimes.times).required("Time is required"),
      guests: Yup.number().min(1, "Must be at least 1").max(10, "Must be at most 10").required("Number of guests is required"),
      occasion: Yup.string().oneOf(["birthday", "engagement", "anniversary"]).required("Occasion is required"),
    }),
  });

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
  }, [formik.values.date]);

  return (
      <form onSubmit={formik.handleSubmit} >
        <label htmlFor="firstName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...formik.getFieldProps("firstName")}
          />
        <div data-testid="res-date-error" className='text-red-500'>
          {formik.touched.firstName && formik.errors.firstName}
        </div>
        <label htmlFor="firstName" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
        <div data-testid="res-date-error" className='text-red-500'>
          {formik.touched.email && formik.errors.email}
        </div>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" data-testid="res-date" id="res-date" {...formik.getFieldProps("date")} />
        <div data-testid="res-date-error" className='text-red-500'>
          {formik.touched.date && formik.errors.date}
        </div>
        <label htmlFor="res-time">Choose time</label>
        <select data-testid="res-time" id="res-time" {...formik.getFieldProps("time")}>
          {availableTimes.times.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <div data-testid="res-time-error" className='text-red-500'>
          {formik.touched.time && formik.errors.time}
        </div>
        <label htmlFor="guests">Number of guests</label>
        <input data-testid="guests" type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps("guests")} />
        <div data-testid="guests-error" className='text-red-500'>
          {formik.touched.guests && formik.errors.guests}
        </div>
        <label htmlFor="occasion">Occasion</label>
        <select data-testid="occasion" id="occasion" {...formik.getFieldProps("occasion")}>
          <option value="birthday" className="opt">Birthday</option>
          <option value="engagement" className="opt">Engagement</option>
          <option value="anniversary" className="opt">Anniversary</option>
        </select>
        <div data-testid="occasion-error" className='text-red-500'>
          {formik.touched.occasion && formik.errors.occasion}
        </div>
        <div className='form-btn-box'>
          <input data-testid="submit-btn" type="submit" value="Make Your reservation" className='form-btn' />
        </div>
      </form>
  );
};
export default BookingForm;