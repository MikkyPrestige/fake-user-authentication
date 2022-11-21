// REGISTER COMPONENT: This component is for the form to register with the company in the app

import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/booking.css";

const Booking = () => {
  // State for the form
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessNumber: "",
    businessAddress: "",
    businessType: "",
    OrderMessage: "",
  });

  // State for the errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for the success message
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle the form
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form reset after values are validated to be true
  const handleReset = () => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      businessName: "",
      businessNumber: "",
      businessAddress: "",
      businessType: "",
      OrderMessage: "",
    });
  };

  // Function to handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form");
    // Validate the form
    setErrors(validate(form));
    setIsSubmitting(true);
  };

  // Function to validate the form
  const validate = (form) => {
    let errors = {};

    // Validate name
    if (!form.fullName) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z ]{2,30}$/.test(form.name)) {
      errors.fullName = "Name is invalid";
    }

    // Validate email
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid";
    }

    // Validate phone
    if (!form.phone) {
      errors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      errors.phone = "Phone is invalid";
    }

    // Validate Order Message
    if (!form.OrderMessage) {
      errors.OrderMessage = "Order Message is required";
    } else if (!/^[a-zA-Z ]{2,30}$/.test(form.OrderMessage)) {
      errors.OrderMessage = "Order Message is invalid";
    }

    return errors;
  };

  // Function to handle the success message
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setSuccessMessage("Form submitted successfully!");
      handleReset();
    }
  }, [errors, isSubmitting]);

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
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="booking__form--input"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleForm}
            />
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
              placeholder="Enter your email"
              value={form.email}
              onChange={handleForm}
            />
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
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleForm}
            />
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
              placeholder="Enter your business name"
              value={form.businessName}
              onChange={handleForm}
            />
          </div>
          <div className="booking__form--group">
            <label htmlFor="businessNumber" className="booking__form--label">
              Business Number (optional)
            </label>
            <input
              type="tel"
              name="businessNumber"
              id="businessNumber"
              className="booking__form--input"
              placeholder="Enter your business number"
              value={form.businessNumber}
              onChange={handleForm}
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
              className="booking__form--input"
              placeholder="Enter your business address"
              value={form.businessAddress}
              onChange={handleForm}
            />
          </div>
          <div className="booking__form--group">
            <label htmlFor="OrderMessage" className="booking__form--label">
              Order Message *
            </label>
            <textarea
              name="OrderMessage"
              id="OrderMessage"
              className="booking__form--input"
              placeholder="Enter your order message"
              value={form.OrderMessage}
              onChange={handleForm}
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
              onChange={handleForm}
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
              onChange={handleForm}
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
              onChange={handleForm}
            >
              <option value="One Time">One Time</option>
              <option value="Weekly">Weekly</option>
              <option value="Bi-Weekly">Bi-Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <button type="submit" className="booking__form--button">
            Submit
          </button>
          {successMessage && (
            <p className="booking__form--success">
              Your message has been sent successfully. We will get back to you
              shortly. <span>
                Thank you for choosing us. We look forward to serving you.
              </span>
            </p>
          )}
        </form>
      </div>
      <Link to="/" className="booking__back">
        <i className="fas fa-arrow-left"></i> Back to Home
      </Link>
    </div>
  );
};

export default Booking;
