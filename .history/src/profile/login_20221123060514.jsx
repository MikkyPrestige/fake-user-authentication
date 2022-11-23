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

  const redirect = location.state?.path || '/home';

  // Validate the form and user
  const validate = () => {
    if (!user || !password) {
      setError('Please enter your username and password.');
      return false;
    }

    return true;
  };

  // Handle the form login
  const login = () => {
    if (validate()) {
      auth.login(user, password, () => {
        navigate(redirect || '/');
      });
    }
    // auth.login(user);
    // navigate(redirect, { replace: true });
  };
  // const login = (e) => {
  //   e.preventDefault();

  //   if (validate()) {
  //     // Login the user
  //     auth.login(user);

  //     // Navigate to the home page
  //     navigate(redirect);
  //   }
  // };

  // Return the login form
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={login}>
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input type="text" id="user" value={user} onChange={(e) => setUser(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
