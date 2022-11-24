// LOGIN COMPONENT - LOGIN PAGE
// This component is the login page for the application. It is a form that allows the user to enter their username and password.

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/auth";
import "../assets/styles/login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Validate the form
  const validate = () => {
    if (!userName && !password) {
      setError("Please enter a username and password or email.");
      return false;
    } else if (userName === "") {
      setError("Please enter a username.");
      return false;
    } else if (password === "") {
      setError("Please enter a password.");
      return false;
    } else {
      return true;
    }
  };

  // Handle the form login
  const handleLogin = () => {
    if (validate()) {
      auth.login(userName, password);
      navigate(location.state?.from || "/user", { replace: true }); // Redirect the user to the user page after they login successfully.
    }
  };

  // Handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);
    handleLogin();
  };

  // Handle the form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "user") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Login to your account</h1>
        <form onSubmit={handleSubmit} className="login__form">
          <div className="login__form__group">
            <label htmlFor="user" className="login__label">
              Username
            </label>
            <input
              type="text"
              name="user"
              value={userName}
              onChange={handleChange}
              className="login__input"
            />
          </div>
          <div className="login__form__group">
            <label htmlFor="password" className="login__label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="login__input"
            />
          </div>
          <button type="submit" className="login__btn">
            Login
          </button>
        </form>
        <p className="login__error">{error}</p>
        <p className="login__links">
          Don't have an account?{" "}
          <a href="/signUp" className="login__link--item">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
