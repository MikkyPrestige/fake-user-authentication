// REGISTER COMPONENT: This component is for the form to register with the company in the app

import React from "react";
import { useState } from "react";
import "../assets/styles/booking.css";

const Booking = () => {
  // Create a state for the form
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    businessAddress: "",
    businessPhone: "",
    order: "",
  });

  // Create a state for the error
  const [error, setError] = useState({});
  // Create a state for the success
  const [success, setSuccess] = useState(false);

  // Create a function to handle the change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // A spread operator is used to copy the form object and then add the name and value to the form object and then set the form object to the new form object with the name and value added to it
  };

  // Create a function to handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Validate the form
    const validate = () => {
      let error = {};
      if (!form.firstName) {
        error.firstName = "First name is required";
      }
      if (!form.lastName) {
        error.lastName = "Last name is required";
      }
      if (!form.email) {
        error.email = "Email is required";
      }
      if (!form.phone) {
        error.phone = "Phone Number is required";
      }
      if (!form.order) {
        error.order = "Order is required";
      }
      return error;
    };
    // Set the error
    setError(validate());
    // Check if there is no error
    if (Object.keys(validate()).length === 0) {
      setSuccess(true);
    }
  };

  return (
    <div className="booking">
      <div className="booking__wrapper">
        <div className="booking__content">
          <h1 className="booking__title">Book our Services</h1>
          <p className="booking__description">
            Fill out the form to book a service with us
          </p>
        </div>
        <form className="booking__form" onSubmit={handleSubmit}>
          <div className="booking__form--group">
            <label htmlFor="firstName" className="booking__form--label">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="booking__form--input"
              onChange={handleChange}
              required
            />
            {error.firstName && (
              <p className="booking__form--error">{error.firstName}</p>
            )}
          </div>
          <div className="booking__form--group">
            <label htmlFor="lastName" className="booking__form--label">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="booking__form--input"
              onChange={handleChange}
              required
            />
            {error.lastName && (
              <p className="booking__form--error">{error.lastName}</p>
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
              className="booking__form--input"
              onChange={handleChange}
              required
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
              className="booking__form--input"
              onChange={handleChange}
              required
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
              className="booking__form--input"
              onChange={handleChange}
            />
          </div>
          <div className="booking__form--group">
            <label htmlFor="businessAddress" className="booking__form--label">
              Business Address (please include city, state and zip)
            </label>
            <input
              type="text"
              name="businessAddress"
              id="businessAddress"
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
              className="booking__form--input"
              onChange={handleChange}
            />
          </div>
          <div className="booking__form--group">
            <label htmlFor="order" className="booking__form--label">
              Tell us about your laundry needs *
            </label>
            <textarea
              name="order"
              id="order"
              cols="20"
              rows="10"
              className="booking__form--input"
              onChange={handleChange}
              required
            ></textarea>
            {error.order && (
              <p className="booking__form--error">{error.order}</p>
            )}
          </div>
          <button className="booking__form--button">Submit</button>
        </form>
        {success && (
          <p className="booking__form--success">
            Your order is received and been fast tracked.
            <span>Thank you for choosing us.</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Booking;
