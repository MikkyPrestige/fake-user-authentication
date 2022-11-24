// LOGIN COMPONENT - LOGIN PAGE
// This component is the login page for the application. It is a form that allows the user to enter their username and password.

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/auth";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Validate the form
  const validate = () => {
    if (!userName && !password && !email) {
      setError("Please enter a username and password or email.");
      return false;
    } else if (userName === "") {
      setError("Please enter a username.");
      return false;
    } else if (email === "") {
      setError("Please enter an email.");
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
      auth.login(userName, email, password);
      navigate(location.state?.from || "/user", { replace: true }); // Redirect the user to the user page after they login successfully.
    }
  };

  // Handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName)
    handleLogin();
  };

  // Handle the form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "user") {
      setUserName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="login">
      <h1>Login to your account
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Username</label>
        <input
          type="text"
          name="user"
          value={userName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <p>{error}</p>
      <div className="login__links">
        <p>
          Don't have an account? <a href="/signUp">Sign up</a>
        </p>
        </div>
    </div>
  );
};

export default Login;
