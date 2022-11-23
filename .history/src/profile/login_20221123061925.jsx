// LOGIN COMPONENT - LOGIN PAGE
// This component is the login page for the application. It is a form that allows the user to enter their username and password.

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/auth';

const Login = () => {
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.state?.path || '/';

  // Validate the form
  const validate = () => {
    if (user === '') {
      setError('Please enter a username.');
      return false;
    } else if (password === '') {
      setError('Please enter a password.');
      return false;
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    } else if (!user && !password) {
      setError('Please enter a username and password.');
      return false;
    } else {
    return true;
  };

  // Handle the form login
  const handleLogin = () => {
    if (validate()) {
      auth.login(user, password);
    // auth.login(user);
    navigate(redirect, { replace: true });
  };

  // Return the login form
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;