// SIGN IN COMPONENT: This component is used to sign in a user.

// Import the necessary modules
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/contextAuth";

// Create the component
const SignIn = () => {
  // Get the context
  const { login, error } = useContext(AuthContext);
  // Create a state for the form
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // Create a function to handle the change
  const handleChange = (e) => {
    // Set the form
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }; // end handleChange
  // Create a function to handle the submit
  const handleSubmit = (e) => {
    // Prevent the default
    e.preventDefault();
    // Login the user
    login();
  }; // end handleSubmit
  // Return the component
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center">Sign In</h3>
              <form onSubmit={handleSubmit}>
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
                  Sign In
                </button>
              </form>
              <p className="mt-3">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the component
export default SignIn;  
