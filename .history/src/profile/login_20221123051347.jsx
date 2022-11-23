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
  const [ user, setUser ] =useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");
  const auth  = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.state?.path || "/"; // If the user is redirected to the login page, the path is stored in the location state. If the path is not stored, the user is redirected to the profile page after login is successful

  const validate = () => {
    if (user && password) {
      return true;
    } else {
      return false;
    }
  };

  const login = () => {
    if (validate()) {
      auth.login(user, password)
        .then(() => {
          navigate(redirect);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Please enter a username and password");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="login__form">
        <label htmlFor="user">Username</label>
        <input type="text" id="user" value={user} onChange={(event) => setUser(event.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button onClick={login}>Login</button>
        <p className="login__error">{error}</p>
        <p className="login__register">Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
};

// Export the Login component
export default Login;