// REGISTER COMPONENT FROM THE CONTEXT API
// This component is for the register page in the app

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "./context/auth";

const Register = () => {
  const { register } = useContext(UserAuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    register(email, password, fullName);
    console.log(register);
  };

  return (
    <div className="register">
      <h1 className="register__title">Register</h1>
      <form className="register__form" onSubmit={handleRegister}>
        <label className="register__label" htmlFor="fullName">
          Full Name
        </label>
        <input
          className="register__input"
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label className="register__label" htmlFor="email">
          Email
        </label>
        <input
          className="register__input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="register__label" htmlFor="password">
          Password
        </label>
        <input
          className="register__input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register__button" type="submit">
          Register
        </button>
      </form>
      <p className="register__message">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;