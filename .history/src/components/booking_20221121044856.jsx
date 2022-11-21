// BOOKING COMPONENT: This component is for the form to schedule an appointment with the company in the app


import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
            <label htmlFor="firstName" className="booking__form--label">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your First Name"
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
              placeholder="Enter your Last Name"
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
              placeholder="Enter your Email"
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
              placeholder="Enter your Phone Number"
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
              placeholder="Enter your Business Phone"
              className="booking__form--input"
              onChange={handleChange}
            />
          </div>

<div className="booking__form--group">
<label htmlFor="service" className="booking__form--label">
  Service
</label>
<select
  name="service"
  id="service"
  className="booking__form--input"
  value={form.service}
  onChange={handleChange}
>
  <option value="Wash and Fold">Wash and Fold</option>
  <option value="Dry Cleaning">Dry Cleaning</option>
  <option value="Pickup and Delivery">Pickup and Delivery</option>
  <option value="Other">Other</option>
</select>
</div>
<div className="booking__form--group">
<label htmlFor="service" className="booking__form--label">
  Service Type
</label>
<select
  name="serviceType"
  id="serviceType"
  className="booking__form--input"
  value={form.serviceType}
  onChange={handleChange}
>
  <option value="Regular">Regular</option>
  <option value="Express">Express</option>
</select>
</div>
<div className="booking__form--group">
<label htmlFor="service" className="booking__form--label">
  Service Frequency
</label>
<select
  name="serviceFrequency"
  id="serviceFrequency"
  className="booking__form--input"
  value={form.serviceFrequency}
  onChange={handleChange}
>
  <option value="One Time">One Time</option>
  <option value="Weekly">Weekly</option>
  <option value="Bi-Weekly">Bi-Weekly</option>
  <option value="Monthly">Monthly</option>
</select>
</div>
          <div className="booking__form--group">
            <label htmlFor="order" className="booking__form--label">
              Tell us about your laundry needs *
            </label>
            <textarea
              name="order"
              id="order"
              cols="30"
              rows="5"
              placeholder="Enter your laundry needs"
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
      <Link to="/" className="booking__link">
        Back
      </Link>
    </div>
  );
};

export default Booking;