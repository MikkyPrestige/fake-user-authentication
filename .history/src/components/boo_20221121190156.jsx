// REGISTER COMPONENT: This component is for the form to register with the company in the app

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/booking.css";

const Booking = () => {
  // State for the form
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    businessName: "",
    businessAddress: "",
    businessPhone: "",
    orderMessage: "",
  });

  // State for the error
  const [error, setError] = useState({});
  // State for the success
  const [success, setSuccess] = useState(false);
  // State for reset after success
  const [reset, setReset] = useState(false);

  // Function to handle the change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // A spread operator is used to copy the form object and then add the name and value to the form object and then set the form object to the new form object with the name and value added to it
  }

  // Function to handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Validate the form
    const validate = () => {
      let error = {};
      if (!form.fullName) {
        error.fullName = "Full name is required";
      }
      if (!form.email) {
        error.email = "Email is required";
      }
      if (!form.businessPhone) {
        error.businessPhone = "Phone Number is required";
      }
      if (!form.orderMessage) {
        error.orderMessage = "Order is required";
      }
      return error;
    };
    // Set the error
    setError(validate());
    // Check if there is no error
    if (Object.keys(validate()).length === 0) {
      setSuccess(true);
    }
  }


  return (
    <div className="booking">
      <div className="booking__container">
        <div className="booking__container__header">
          <h1>Register</h1>
          <p>Register with us to get your business listed on our website</p>
        </div>
        <div className="booking__container__form">
          <form onSubmit={handleSubmit}>
            <div className="booking__container__form__group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={form.fullName}
                onChange={handleChange}
              />
              {error.fullName && <p className="error">{error.fullName}</p>}
            </div>
            <div className="booking__container__form__group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
              />
              {error.email && <p className="error">{error.email}</p>}
            </div>
            <div className="booking__container__form__group">
              <label htmlFor="businessName">Business Name</label>
              <input
                type="text"
                name="businessName"
                id="businessName"
                value={form.businessName}
                onChange={handleChange}
              />
            </div>
            <div className="booking__container__form__group">
              <label htmlFor="businessAddress">Business Address</label>
              <input
                type="text"
                name="businessAddress"
                id="businessAddress"
                value={form.businessAddress}
                onChange={handleChange}
              />
            </div>
            <div className="booking__container__form__group">
              <label htmlFor="businessPhone">Business Phone</label>
              <input
                type="text"
                name="businessPhone"
                id="businessPhone"
                value={form.businessPhone}
                onChange={handleChange}
              />
              {error.businessPhone && <p className="error">{error.businessPhone}</p>}
            </div>
            <div className="booking__container__form__group">
              <label htmlFor="orderMessage">Order Message</label>
              <textarea
                name="orderMessage"
                id="orderMessage"
                cols="30"
                rows="10"
                value={form.orderMessage}
                onChange={handleChange}
              ></textarea>
              {error.orderMessage && <p className="error">{error.orderMessage}</p>}
            </div>
            <div className="booking__container__form__group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;