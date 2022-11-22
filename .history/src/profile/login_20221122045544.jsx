// LOGIN COMPONENT FROM THE CONTEXT API
// This component is for the login page in the app

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../components/context/auth";

const Login = () => {
  const { login } = useContext(UserAuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login">
      <h1 className="login__title">Sign In</h1>
      <form className="login__form" onSubmit={handleLogin}>
        <label className="login__label" htmlFor="email">
          Email
        </label>
        <input
          className="login__input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input
          className="login__input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login__button" type="submit">
          Login
        </button>
      </form>
      <p className="login__message">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;

