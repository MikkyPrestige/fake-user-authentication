// REGISTER COMPONENT: This component is for the form to register with the company in the app

import React from "react";
import { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
  };

  // Validate values
  const validate = () => {
    if (firstName === "") {
      alert("Please enter your first name");
      return false;
    } else if (lastName === "") {
      alert("Please enter your last name");
      return false;
    } else if (email === "") {
      alert("Please enter your email");
      return false;
    } else if (password === "") {
      alert("Please enter your password");
      return false;
    } else {
      alert("Thank you for registering with us");
    }
  };

  return (
    <div className="register">
      <div className="register__content">
        <h1 className="register__title">Register</h1>
        <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__form--group">
            <label className="register__form--label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="register__form--input"
              type="text"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </div>
          <div className="register__form--group">
            <label className="register__form--label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="register__form--input"
              type="text"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </div>
          <div className="register__form--group">
            <label className="register__form--label" htmlFor="email">
              Email
            </label>
            <input
              className="register__form--input"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="register__form--group">
            <label className="register__form--label" htmlFor="password">
              Password
            </label>
            <input
              className="register__form--input"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button onClick={validate} className="register__form--button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;