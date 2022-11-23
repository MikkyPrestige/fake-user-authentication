// LOGIN COMPONENT - LOGIN PAGE
// This component is the login page for the application. It is a form that allows the user to enter their username and password. It also has a link to the registration page.
//  - The form is a controlled component. The state is stored in the component and the values are set using the onChange event handler.
//  - The form is validated using the validate function. If the form is valid, the login function is called.
//  - The login function is called when the form is submitted. It calls the login function from the auth context. If the login is successful, the user is redirected to the profile page. If the login is unsuccessful, an error message is displayed.

// Import the React module
import React, { useContext, useState } from 'react';

// Import the Link component
import { Link } from 'react-router-dom';

// Import the auth context
import AuthContext from '../../context/auth/authContext';


// Create the component
const Login = (props) => {
    // Get the auth context
    const authContext = useContext(AuthContext);

    // Destructure the login function
    const { login } = authContext;

    // Create the state
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    // Destructure the state
    const { username, password } = user;

    // Create the onChange function
    const onChange = (e) => {
        // Set the state
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    // Create the onSubmit function
    const onSubmit = (e) => {
        // Prevent the default action
        e.preventDefault();

        // Validate the form
        if (username === '' || password === '') {
            // Display an error message
            console.log('Please enter all fields');
        } else {
            // Call the login function
            login({
                username,
                password
            });
        }
    };

    // Return the component
    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' value={username} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={onChange} />
                </div>
                <input type='submit' value='Login' className='btn btn-primary btn-block' />
            </form>
            <p>
                Don't have an account? <Link to='/register'>Register</Link>
            </p>
        </div>
    );
};

// Export the component
export default Login;