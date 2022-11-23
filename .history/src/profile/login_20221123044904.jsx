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
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.state?.path || "/"; // If the user is redirected to the login page, the path is stored in the location state. If the path is not stored, the user is redirected to the profile page after login is successful  

  

  // // Create the validate function
  // const validate = () => {
  //   // Check that the user is not empty
  //   if (user === "") {
  //     setError("User is required");
  //     return false;
  //   }

  //   // Check that the password is not empty
  //   if (password === "") {
  //     setError("Password is required");
  //     return false;
  //   }

  //   // Return true
  //   return true;
  // };


//   // Create the login function
//   const doLogin = async () => {
//     // Validate the form
//     if (!validate()) {
//       return;
//     }

//     // Call the login function
//     const result = await login(user, password);

//     // Check the result
//     if (result) {
//       // Get the return to url
//       const { from } = location.state || { from: { pathname: "/" } };

//       // Navigate to the return to url
//       navigate(from);
//     } else {
//       // Set the error
//       setError("Login failed");
//     }
//   };

//   // Return the login form
//   return (
//     <div className="login">
//       <h1>Login</h1>
//       <div className="form">
//         <div className="form-group">
//           <label>User</label>
//           <input
//             type="text"
//             className="form-control"
//             value={user}
//             onChange={(e) => setUser(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <button className="btn btn-primary" onClick={doLogin}>
//             Login
//           </button>
//         </div>
//         <div className="form-group">
//           <a href="/register">Register</a>
//         </div>
//         {error && <div className="error">{error}</div>}
//       </div>
//     </div>
//   );
// };

// // Export the Login component
// export default Login;