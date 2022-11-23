// LOGIN COMPONENT - LOGIN PAGE
// This component is the login page for the application. It is a form that allows the user to enter their username and password.

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/auth';

const Login = () => {
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.state?.path || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(user, password);
    navigate(redirect, { replace: true });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;