// LOGIN COMPONENT - LOGIN PAGE
// This component is the login page for the application. It is a form that allows the user to enter their username and password. It also has a link to the registration page.
//  - The form is validated using the validate function. If the form is valid, the user is logged in
//  - The login function is called when the form is submitted. It calls the login function from the auth context. If the login is successful, the user is redirected to the profile page. If the login is unsuccessful, an error message is displayed.

// Import the React module
import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './context/auth';

// Create the Login component
const Login = () => {
  const [ user, setUser ] =useState('')