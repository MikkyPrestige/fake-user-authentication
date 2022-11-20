// REGISTER COMPONENT: This component is for the form to register with the company in the app
// Use useEffect to manage the change dependency

import React from "react";
import { useState } from "react";

const Register = () => {
  // Create a state for the form
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Create a state for the error
  const [error, setError] = useState({});
  // Create a state for the success
  const [success, setSuccess] = useState(false);

  // Create a function to handle the change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
      if (!form.password) {
        error.password = "Password is required";
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
    <div className="register">
      <div className="register__content">
        <h1 className="register__title">Register</h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__form--group">
            <label htmlFor="firstName" className="register__form--label">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="register__form--input"
              onChange={handleChange}
            />
            {error.firstName && (
              <p className="register__form--error">{error.firstName}</p>
            )}
          </div>
          <div className="register__form--group">
            <label htmlFor="lastName" className="register__form--label">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="register__form--input"
              onChange={handleChange}
            />
            {error.lastName && (
              <p className="register__form--error">{error.lastName}</p>
            )}
          </div>
          <div className="register__form--group">
            <label htmlFor="email" className="register__form--label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="register__form--input"
              onChange={handleChange}
            />
            {error.email && (
              <p className="register__form--error">{error.email}</p>
            )}
          </div>
          <div className="register__form--group">
            <label htmlFor="password" className="register__form--label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="register__form--input"
              onChange={handleChange}
            />
            {error.password && (
              <p className="register__form--error">{error.password}</p>
            )}
          </div>
          <button className="register__form--button">Register</button>
        </form>
        {success && (
          <p className="register__form--success">
            You have successfully registered
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;

