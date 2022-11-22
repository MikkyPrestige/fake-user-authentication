// AUTHENTICATION COMPONENT: This component is for the authentication in the app (login and register)
// Set up fake userAuthContext using the context API to always carry out a fake authentication

import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { UserAuthContext } from "../context/userAuthContext";
import "../assets/styles/auth.css";

const Auth = ({ match }) => {
  // Get the user from the context
  const { user, setUser } = useContext(UserAuthContext);
  // Create a state for the form
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // Create a state for the error
  const [error, setError] = useState({});
  // Create a state for the success
  const [success, setSuccess] = useState(false);
  // Create a state for reset
  const [reset] = useState({
    fullName: "",
    email: "",
    password: "",
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
      // Check if the user is logging in or registering
      if (match.path === "/login") {
        // Login the user
        login();
      } else {
        // Register the user
        register();
      }
    }
  }

  // Create a function to validate the form
  const validateForm = () => {
    // Create a variable to store the errors
    let errors = {};
    // Validate the form
    if (form.fullName.trim() === "") {
      errors.fullName = "Please enter your full name";
    }
    if (form.email.trim() === "") {
      errors.email = "Please enter your email";
    }
    if (form.password.trim() === "") {
      errors.password = "Please enter your password";
    }
    // Set the errors
    setError(errors);
    // Check if there are errors
    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // Create a function to register the user
  const register = () => {
    // Set the user
    setUser(form);
    // Show the success message
    setSuccess(true);
    // Hide the success message after 15 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 15000);
    // Reset the form
    setForm(reset);
  }

  // Create a function to login the user
  const login = () => {
    // Check if the user is logging in
    if (user.email === form.email && user.password === form.password) {
      // Set the user
      setUser(form);
      // Show the success message
      setSuccess(true);
      // Hide the success message after 15 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 15000);
      // Reset the form
      setForm(reset);
    } else {
      // Set the error
      setError({
        login: "Invalid email or password",
      });
    }
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__container__form">
          <h1 className="auth__container__form__title">
            {match.path === "/login" ? "Login" : "Register"}
          </h1>
          <form onSubmit={handleSubmit}>
            {match.path === "/register" && (
              <div className="auth__container__form__group">
                <label htmlFor="fullName" className="auth__container__form__group__label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="auth__container__form__group__input"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                />
                {error.fullName && (
                  <p className="auth__container__form__group__error">{error.fullName}</p>
                )}
              </div>
            )}
            <div className="auth__container__form__group">
              <label htmlFor="email" className="auth__container__form__group__label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="auth__container__form__group__input"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
              />
              {error.email && (
                <p className="auth__container__form__group__error">{error.email}</p>
              )}
            </div>
            <div className="auth__container__form__group">
              <label htmlFor="password" className="auth__container__form__group__label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="auth__container__form__group__input"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
              />
              {error.password && (
                <p className="auth__container__form__group__error">{error.password}</p>
              )}
            </div>
            {error.login && (
              <p className="auth__container__form__error">{error.login}</p>
            )}
            {success && (
              <p className="auth__container__form__success">
                {match.path === "/login" ? "Logged in successfully" : "Registered successfully"}
              </p>
            )}
            <button type="submit" className="auth__container__form__button">
              {match.path === "/login" ? "Login" : "Register"}
            </button>
          </form>
          <p className="auth__container__form__text">
            {match.path === "/login" ? "Don't have an account?" : "Already have an account?"}
            <Link to={match.path === "/login" ? "/register" : "/login"}>
              {match.path === "/login" ? "Register" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;