// LOGIN COMPONENT - LOGIN PAGE
// This component is the login page for the application. It is a form that allows the user to enter their username and password.

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './context/auth';

const Login = () => {
    // Create the state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Create the history
    const history = useHistory();

    // Create the auth
    const { login } = useAuth();

    // Create the submit function
    const submit = (e) => {
        // Prevent the default
        e.preventDefault();

        // Login
        login({ username, password });

        // Redirect to the profile page
        history.push('/profile');
    };

    // Return the login page
    return (
        <div className="login">
            <form onSubmit={submit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

// Export the login component
export default Login;