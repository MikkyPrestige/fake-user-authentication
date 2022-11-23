// LOGIN COMPONENT - LOGIN PAGE
// This component is the login page for the application. It is a form that allows the user to enter their username and password. It also has a link to the registration page.
//  - The form is validated using the validate function. If the form is valid, the login function is called.
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

    // Create the login function
    const loginFunction = async () => {
        // Validate the form
        if (validate()) {
            // Try to login
            try {
                // Call the login function
                await login({ username, password });

                // Get the state from the location
                const { from } = location.state || { from: { pathname: '/user' } };

                // Navigate to the user page
                navigate(from);
            } catch (error) {
                // Set the error
                setError('Invalid username or password');
            }
        }
    };

    // Return the login form
    return (
        <div className="login">
            <div className="login__container">
                <h1 className="login__title">Login</h1>
                <div className="login__form">
                    <div className="login__form--group">
                        <label className="login__form--label">Username</label>
                        <input
                            className="login__form--input"
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="login__form--group">
                        <label className="login__form--label">Password</label>
                        <input
                            className="login__form--input"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="login__form--group">
                        <button className="login__form--button" onClick={loginFunction}>
                            Login
                        </button>
                    </div>
                    <div className="login__form--group">
                        <p className="login__form--error">{error}</p>
                    </div>
                    <div className="login__form--group">
                        <p className="login__form--text">
                            Don't have an account? <a href="/register">Register</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export the Login component
export default Login;