// LOGIN COMPONENT - LOGIN PAGE
// This component is the login page for the application. It is a form that allows the user to enter their username and password.

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/auth";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.state?.path || "/user"; // If the user was redirected to the login page, redirect them back to the page they were on after they login successfully. Otherwise, redirect them to the home page.

  // Validate the form
  const validate = () => {
   let error = "";
    if (user === "") {
      error = "Please enter a username.";
    } else if (password === "") {
      error = "Please enter a password.";
    } else if (!user && !password) {
      error = "Please enter a username and password.";
    }
    setError(error);
    return error === "";
  };

  // Handle the form login
  const handleLogin = () => {
    if (validate()) {
      auth.login(user, password);
      navigate(redirect, { replace: true }); // Redirect the user to the home page after they login successfully.
    }
  };

  // Handle the form submit
  const handleSubmit = () => {
    handleLogin();
  };

  // Handle the form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "user") {
      setUser(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // Return the login form
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="Username"
          value={user}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;

//   // Validate the form
//   const validate = () => {
//     if (user === "") {
//       setError("Please enter a username.");
//       return false;
//     } else if (password === "") {
//       setError("Please enter a password.");
//       return false;
//     } else if (!user && !password) {
//       setError("Please enter a username and password.");
//       return false;
//     } else {
//       return true;
//     }
//   };

//   // Handle the form login
//   const handleLogin = () => {
//     if (validate()) {
//       auth.login(user, password);
//       navigate(redirect, { replace: true }); //  Redirect the user to the home page after they login successfully.
//     }
//   };

//   // Handle the form submit
//   const handleSubmit = () => {
//     handleLogin();
//   };

//   // Handle the form change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "user") {
//       setUser(value);
//     } else if (name === "password") {
//       setPassword(value);
//     }
//   };

//   // Return the login form
//   return (
//     <div className="login">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="user">Username</label>
//           <input
//             type="text"
//             name="user"
//             id="user"
//             value={user}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             onChange={handleChange}
//           />
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
