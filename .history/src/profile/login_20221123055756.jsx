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
  const validate = () => {
    if (!user & !password ) {
      setError('Please enter a username and password');
      return false;
    }
    if ( user === '' ) {
      setError('Please enter a username.');
      return false;
    } else if ( password === '' ) {
      setError('Please enter a password.');
      return false;
    } else {
      return true;
    }
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if ( validate() ) {
      // Authenticate the user
      auth.login(user);

      // Redirect the user
      navigate(redirect);
    }

  };

  // Handle the form change
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch ( name ) {
      case 'user':
        setUser(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Username</label>
        <input type="text" name="user" id="user" value={user} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;

  // Handle the form login
  // const login = () => {
    // if (validate()) {
    //   auth.login(user, password, () => {
    //     navigate(redirect, { replace: true });
    //   });
    // }
  //   auth.login(user);
  //   navigate(redirect, { replace: true });
  // };


  // Return the login form
//   return (
//     <div className="login">
//       <h1>Login</h1>
//       <form onSubmit={login}>
//         <div className="form-group">
//           <label htmlFor="user">Username</label>
//           <input type="text" id="user" value={user} onChange={(e) => setUser(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <button type="submit">Login</button>
//         </div>
//         {error && <div className="error">{error}</div>}
//       </form>
//     </div>
//   );
// };

// export default Login;
