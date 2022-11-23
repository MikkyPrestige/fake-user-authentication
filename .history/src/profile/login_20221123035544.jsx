// LOGIN COMPONENT - LOGIN PAGE
// This component is the login page for the application. It is a form that allows the user to enter their username and password. It also has a link to the registration page.
//  - The form is validated using the validate function. If the form is valid, the login function is called.
//  - The login function is called when the form is submitted. It calls the login function from the auth context. If the login is successful, the user is redirected to the profile page. If the login is unsuccessful, an error message is displayed.

// Import the React module
import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/auth';

// Create the Login component
const Login = () => {
  // Use the useNavigate hook to redirect the user
  const navigate = useNavigate();
  // Use the useLocation hook to get the state from the previous page
  const location = useLocation();

  // Redirect 
  // Use the useContext hook to get the login function from the auth context
  const { login } = useContext(AuthContext);
  // Create the state variables for the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Create the state variable for the error message
  const [error, setError] = useState('');

  // Create the validate function
  const validate = () => {
    // If the username is empty, set the error message and return false
    if (username === '') {
      setError('Please enter your username.');
      return false;
    }
    // If the password is empty, set the error message and return false
    if (password === '') {
      setError('Please enter your password.');
      return false;
    }
    // If the username and password are not empty, return true
    return true;
  };

  // Create the login function
  const handleSubmit = async (e) => {
    // Prevent the default form submission
    e.preventDefault();
    // If the form is valid, call the login function
    if (validate()) {
      // Call the login function from the auth context
      const response = await login(username, password);
      // If the login is successful, redirect the user to the profile page
      if (response) {
        navigate('/profile');
      }
      // If the login is unsuccessful, set the error message
      else {
        setError('Invalid username or password.');
      }
    }
  };

  // Return the login page
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have
        <a href="/register"> an account?</a>
      </p>
      <p className="error">{error}</p>
    </div>
  );
};

// Export the Login component
export default Login;