// AUTHENTICATION COMPONENT: This component is for the authentication in the app (login and register)
// Set up fake userAuthContext using the context API to always carry out a fake authentication

import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/contextAuth";



// import "../assets/styles/auth.css";

const Auth = () => {
  // Get the user from the context
  const { user, error, success, login, register } = useContext(AuthContext);
  // Create a state for the form
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // Create a state for the form type
  const [formType, setFormType] = useState("login");
  // Create a function to handle the form change
  const handleChange = (e) => {
    // Set the form
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  // Create a function to handle the form submit
  const handleSubmit = (e) => {
    // Prevent the default
    e.preventDefault();
    // Check the form type
    if (formType === "login") {
      // Login the user
      login();
    } else {
      // Register the user
      register();
    }
  }
  // Return the component
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center">
                {formType === "login" ? "Sign In" : "Sign Up"}
              </h3>
              <form onSubmit={handleSubmit}>
                {formType === "register" && (
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="form-control"
                      onChange={handleChange}
                      value={form.fullName}
                    />
                    {error.fullName && (
                      <small className="form-text text-danger">
                        {error.fullName}
                      </small>
                    )}
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={handleChange}
                    value={form.email}  
                  />
                  {error.email && (
                    <small className="form-text text-danger">
                      {error.email}
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    onChange={handleChange}
                    value={form.password}
                  />
                  {error.password && (
                    <small className="form-text text-danger">
                      {error.password}
                    </small>
                  )}
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  {formType === "login" ? "Sign In" : "Sign Up"}
                </button>
              </form>
              <div className="text-center mt-3">
                {formType === "login" ? (
                  <p>
                    Don't have an account?{" "}
                    <Link to="/register">Sign Up</Link>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <Link to="/login">Sign In</Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
