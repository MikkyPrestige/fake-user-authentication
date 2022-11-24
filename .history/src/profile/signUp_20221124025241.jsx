// SIGN UP COMPONENT: 
// This component is for the sign up page in the app. it is used to sign up new users to the app

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/auth";

const SignUp = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  // Validate the form
  const validate = () => {
    if (user === "") {
      setError("Please enter a username.");
      return false;
    } else if (password === "") {
      setError("Please enter a password.");
      return false;
    } else if (email === "") {
      setError("Please enter an email address.");
      return false;
    } else if (!user && !password && !email) {
      setError("Please enter a username, password and email address.");
      return false;
    } else {
      return true;
    }
  };

  // Handle the form sign up
  const handleSignUp = () => {
    if (validate()) {
      auth.signUp(user, password, email);
      navigate("/user", { replace: true }); // Redirect the user to the home page after they sign up successfully.
    }
  };

  // Handle the form submit
  const handleSubmit = () => {
    handleSignUp();
  };

  // Handle the form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "user") {
      setUser(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  // Return the sign up form
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form className="signup__form" onSubmit={handleSubmit}>
        <label className="signup__label" htmlFor="user">
          Username:
        </label>
        <input
          className="signup__input"
          type="text"
          name="user"
          value={user}
          onChange={handleChange}
        />
        <label className="signup__label" htmlFor="password">
          Password:
        </label>
        <input
          className="signup__input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <label className="signup__label" htmlFor="email">
          Email:
        </label>
        <input
          className="signup__input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <button className="signup__button" type="submit">
          Sign Up
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default SignUp;