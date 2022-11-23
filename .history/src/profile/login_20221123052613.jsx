// LOGIN COMPONENT - LOGIN PAGE
// This component is the login page for the application. It is a form that allows the user to enter their username and password.

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/auth';

const Login = () => {
    // Get the auth context
    const { login } = useAuth();

    // Get the navigate function
    const navigate = useNavigate();

    // Get the location
    const location = useLocation();

    // Create the state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Create the submit handler
    const handleSubmit = (event) => {
        // Prevent the default action
        event.preventDefault();

        // Login the user
        login({ username, password });

        // Navigate to the home page
        navigate(location.state?.from || '/');
    };

    // Return the login form
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
