// BOOKING COMPONENT: This component is for the form to book a plan with the company in the app

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/booking.css";

const Booking = () => {
  // Create a state for the form
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessAddress: "",
    businessPhone: "",
    orderMessage: "",
  });

  // Create a state for the error
  const [error, setError] = useState({});
  // Create a state for the success
  const [success, setSuccess] = useState(false);
  // Create a state for reset
  const [reset, setReset] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessAddress: "",
    businessPhone: "",
    orderMessage: "",
  });

  // Create a function to handle the form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Create a function to handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form
    if (validateForm()) {
      // Send the form to the backend
      console.log(form);
      // Reset the form
      setForm(reset);
      // Show the success message
      setSuccess(true);
      // Hide the success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  };

  // Create a function to validate the form
  const validateForm = () => {
    // Create a variable to store the errors
    let errors = {};
    // Create a variable to store the form is valid
    let formIsValid = true;

    // Validate the full name
    if (!form.fullName.trim()) {
      errors.fullName = "Please enter your full name";
      formIsValid = false;
    }

    // Validate the email
    if (!form.email.trim()) {
      errors.email = "Please enter your email";
      formIsValid = false;
    } else {
      const regex = /\S+@\S+\.\S+/;
      if (!regex.test(form.email.trim())) {
        errors.email = "Please enter a valid email";
        formIsValid = false;
      }
    }

    // Validate the phone
    if (!form.phone.trim()) {
      errors.phone = "Please enter your phone number";
      formIsValid = false;
    } else {
      const regex = /^[0-9\b]+$/;
      if (!regex.test(form.phone.trim())) {
        errors.phone = "Please enter a valid phone number";
        formIsValid = false;
      }
    }

    // Validate the order message
    if (!form.orderMessage.trim()) {
      errors.orderMessage = "Please enter your order message";
      formIsValid = false;
    }

    // Set the errors
    setError(errors);
    // Return the form is valid
    return formIsValid;
  };

  return (
    <div className="booking">
      <div className="booking__wrapper">
        <div className="booking__content">
          <h1 className="booking__title">Book our Services!!!</h1>
          <div className="booking__description">
            <p className="booking__paragraph">
              While the world has changed a lot over the years, one thing
              remains the same: everyone needs clean clothes! We have all types
              of services to meet your needs.
            </p>
            <h2 className="booking__head">
              Fill out the form to book a service with us...
            </h2>
            <p>
              We offer a wide range of services to our customers. We offer
              pickup and delivery services, wash and fold services, dry cleaning
              services and more. We are located in Asaba, Delta State, Nigeria.
              We are open from 9am to 9pm, Monday to Saturday. We are closed on
              Sundays and public holidays.
            </p>
            <p>
              We have a team of experienced professionals who are dedicated to
              providing the best service to our customers. We are committed to
              providing the best service to our customers.
            </p>
            <p className="booking__appreciation">
              Thank you for choosing us. We look forward to serving you.
            </p>
          </div>
        </div>
        <form className="booking__form" onSubmit={handleSubmit}>
          <div className="booking__form--group">
            <label htmlFor="fullName" className="booking__form--label">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={form.fullName}
              placeholder="Enter your Full Name"
              className="booking__form--input"
              onChange={handleChange}
              // required
            />
            {error.fullName && (
              <p className="booking__form--error">{error.fullName}</p>
            )}
          </div>
          <div className="booking__form--group">
            <label htmlFor="email" className="booking__form--label">
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              placeholder="Enter your Email"
              className="booking__form--input"
              onChange={handleChange}
              // required
            />
            {error.email && (
              <p className="booking__form--error">{error.email}</p>
            )}
          </div>
          <div className="booking__form--group">
            <label htmlFor="phone" className="booking__form--label">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={form.phone}
              placeholder="Enter your Phone Number"
              className="booking__form--input"
              onChange={handleChange}
              // required
            />
            {error.phone && (
              <p className="booking__form--error">{error.phone}</p>
            )}
          </div>
          <div className="booking__form--group">
            <label htmlFor="businessName" className="booking__form--label">
              Business Name (optional)
            </label>
            <input
              type="text"
              name="businessName"
              id="businessName"
              value={form.businessName}
              placeholder="Enter your Business Name"
              className="booking__form--input"
              onChange={handleChange}
            />
          </div>
          <div className="booking__form--group">
            <label htmlFor="businessAddress" className="booking__form--label">
              Business Address (optional)
            </label>
            <input
              type="text"
              name="businessAddress"
              id="businessAddress"
              value={form.businessAddress}
              placeholder="Enter your Business Address"
              className="booking__form--input"
              onChange={handleChange}
            />
          </div>
          <div className="booking__form--group">
            <label htmlFor="businessPhone" className="booking__form--label">
              Business Phone (optional)
            </label>
            <input
              type="text"
              name="businessPhone"
              id="businessPhone"
              value={form.businessPhone}
              placeholder="Enter your Business Phone"
              className="booking__form--input"
              onChange={handleChange}
            />
          </div>
          <div className="booking__form--group">
            <label htmlFor="orderMessage" className="booking__form--label">
              Tell us about your laundry needs *
            </label>
            <textarea
              name="orderMessage"
              id="orderMessage"
              cols="30"
              rows="5"
              value={form.orderMessage}
              placeholder="Enter your laundry needs"
              className="booking__form--input"
              onChange={handleChange}
              // required
            ></textarea>
            {error.orderMessage && (
              <p className="booking__form--error">{error.orderMessage}</p>
            )}
          </div>
          <button className="booking__form--button">Submit</button>
          {success && (
          <p className="booking__form--success">
            Your order is received and been fast tracked.
            <span>Thank you for choosing us.</span>
          </p>
        )}
        </form>
      </div>
      <Link to="/" className="booking__link">
        Back
      </Link>
    </div>
  );
};

export default Booking;