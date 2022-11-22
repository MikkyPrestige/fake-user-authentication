// USER AUTHENTICATION CONTEXT: This is the context for the user authentication in the app (signin and register)

import React, { createContext, useState } from "react";
// const Authentication = () => {
//   // Create user context
//   const UserAuthContext = createContext();
//   // Create a state for the user
//   const [user, setUser] = useState({
//     fullName: "John Doe",
//     email: "johndoe@gmail.com",
//     password: "123456",
//   });
//   // Create a state for the error
//   const [error, setError] = useState({});
//   // Create a state for the success
//   const [success, setSuccess] = useState(false);
//   // Create a state for reset
//   const [reset] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });
//   // Create a function to handle the login
//   const login = () => {
//     // Check if the user is logging in
//     if (form.email === user.email && form.password === user.password) {
//       // Set the user in the context
//       setUser({
//         fullName: user.fullName,
//         email: user.email,
//         password: user.password,
//       });
//       // Reset the form
//       setForm(reset);
//       // Show the success message
//       setSuccess(true);
//       // Hide the error message
//       setError({});
//       // Hide the success message after 15 seconds
//       setTimeout(() => {
//         setSuccess(false);
//       }, 15000);
//     } else {
//       // Set the error
//       setError({
//         email: "Invalid email or password",
//         password: "Invalid email or password",
//       });
//     } // end if
//   }; // end login
//   // Create a function to handle the register
//   const register = () => {
//     // Set the user in the context
//     setUser({
//       fullName: form.fullName,
//       email: form.email,
//       password: form.password,
//     });
//     // Reset the form
//     setForm(reset);
//     // Show the success message
//     setSuccess(true);
//     // Hide the error message
//     setError({});
//     // Hide the success message after 15 seconds
//     setTimeout(() => {
//       setSuccess(false);
//     }, 15000);
//   }; // end register
//   // Create a function to handle the logout
//   const logout = () => {
//     // Set the user in the context
//     setUser({
//       fullName: "",
//       email: "",
//       password: "",
//     });
//     // Reset the form
//     setForm(reset);
//     // Show the success message
//     setSuccess(true);
//     // Hide the error message
//     setError({});
//     // Hide the success message after 15 seconds
//     setTimeout(() => {
//       setSuccess(false);
//     }, 15000);
//   }; // end logout
//   // Create a function to handle the form
//   const handleForm = (e) => {
//     // Set the form
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//     // Hide the error message
//     setError({});
//   }; // end handleForm
//   // Create a function to validate the form
//   const validateForm = () => {
//     // Create a variable to store the errors
//     let errors = {};
//     // Validate the form
//     if (form.fullName.trim() === "") {
//       errors.fullName = "Please enter your full name";
//     }
//     if (form.email.trim() === "") {
//       errors.email = "Please enter your email";
//     }
//     if (form.password.trim() === "") {
//       errors.password = "Please enter your password";
//     }
//     // Set the errors
//     setError(errors);
//     // Check if there are errors
//     if (Object.keys(errors).length === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }; // end validateForm
//   // Create a function to handle the submit
//   const handleSubmit = (e) => {
//     // Prevent the default action
//     e.preventDefault();
//     // Validate the form
//     const isValid = validateForm();
//     // Check if the form is valid
//     if (isValid) {
//       // Check if the user is registering
//       if (form.fullName !== "") {
//         // Register the user
//         register();
//       } else {
//         // Login the user
//         login();
//       } // end if
//     } // end if
//   }; // end handleSubmit
//   // Create a state for the form
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });
//   // Create a state for the form
//   const [isLogin, setIsLogin] = useState(true);
//   // Create a function to handle the login and register
//   const handleLoginRegister = () => {
//     // Check if the user is logging in
//     if (isLogin) {
//       // Set the form
//       setForm({
//         fullName: "",
//         email: "",
//         password: "",
//       });
//       // Set the error
//       setError({});
//       // Set the success
//       setSuccess(false);
//       // Set the isLogin
//       setIsLogin(false);
//     } else {
//       // Set the form
//       setForm({
//         fullName: "",
//         email: "",
//         password: "",
//       });
//       // Set the error
//       setError({});
//       // Set the success
//       setSuccess(false);
//       // Set the isLogin
//       setIsLogin(true);
//     } // end if
//   }; // end handleLoginRegister
//   // Create a state for the loading
//   const [loading, setLoading] = useState(false);
//   // Create a function to handle the loading
//   const handleLoading = () => {
//     // Set the loading
//     setLoading(true);
//     // Hide the loading after 3 seconds
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   }; // end handleLoading
//   // Return the context
//   return (
//     <UserAuthContext.Provider
//       value={{
//         user,
//         error,
//         success,
//         form,
//         isLogin,
//         loading,
//         handleForm,
//         handleSubmit,
//         handleLoginRegister,
//         handleLoading,
//         logout,
//       }}
//     >
//       {props.children}
//     </UserAuthContext.Provider>
//   );
// }; // end Authentication

// Export the context
export default Authentication;
