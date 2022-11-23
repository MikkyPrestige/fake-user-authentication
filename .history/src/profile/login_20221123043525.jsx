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
    // Get the navigate function
    const navigate = useNavigate();

    // Get the location
    const location = useLocation();

    // Get the auth context
    const { login } = useContext(AuthContext);

    // Create the state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Create the validate function
    const validate = () => {
        // Check if the username is empty
        if (username === '') {
            // Set the error
            setError('Please enter your username');

            // Return false
            return false;
        }

        // Check if the password is empty
        if (password === '') {
            // Set the error
            setError('Please enter your password');

            // Return false
            return false;
        }

        // Return true
        return true;
    };
