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

  // Validate the form and user
