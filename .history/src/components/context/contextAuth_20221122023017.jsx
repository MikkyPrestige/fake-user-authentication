// USER AUTHENTICATION CONTEXT: This is the context for the user authentication in the app (signin and register)

import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  user: {
    fullName: "",
    email: "",
    password: "",
  },
  error: {},
  success: false,
  login: () => {},
  register: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  // Create a state for the user
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // Create a state for the error
  const [error, setError] = useState({});
  // Create a state for the success
  const [success, setSuccess] = useState(false);
  // Create a state for reset
  const [reset] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // Create a function to handle the login
  const login = () => {
    // Check if the user is logging in
    if (form.email === user.email && form.password === user.password) {
      // Set the user in the context
      setUser({
        fullName: user.fullName,
        email: user.email,
        password: user.password,
      });
      // Reset the form
      setForm(reset);
      // Show the success message
      setSuccess(true);
      // Hide the error message
      setError({});
      // Hide the success message after 15 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 15000);
    } else {
      // Set the error
      setError({
        email: "Invalid email or password",
        password: "Invalid email or password",
      });
    } // end if
  }; // end login
  // Create a function to handle the register
  const register = () => {
    // Set the user in the context
    setUser({
      fullName: form.fullName,
      email: form.email,
      password: form.password,
    });
    // Reset the form
    setForm(reset);
    // Show the success message
    setSuccess(true);
    // Hide the error message
    setError({});
    // Hide the success message after 15 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 15000);
  }; // end register
  // Create a function to handle the logout
  const logout = () => {
    // Reset the user
    setUser({
      fullName: "",
      email: "",
      password: "",
    });
    // Reset the form
    setForm(reset);
    // Show the success message
    setSuccess(true);
    // Hide the error message
    setError({});
    // Hide the success message after 15 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 15000);
  }; // end logout
  // Create a state for the form
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // Create a function to handle the form
  const handleForm = (e) => {
    // Set the form
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }; // end handleForm
  // Create a state for the form error
  const [formError, setFormError] = useState({});
  // Create a function to handle the form error
  const handleFormError = () => {
    // Set the form error
    setFormError({
      fullName: form.fullName === "" ? "Full name is required" : "",
      email: form.email === "" ? "Email is required" : "",
      password: form.password === "" ? "Password is required" : "",
    });
  }; // end handleFormError
  // Create a function to handle the form submit
  const handleFormSubmit = (e) => {
    // Prevent the default action
    e.preventDefault();
    // Check if the form is valid
    if (form.fullName !== "" && form.email !== "" && form.password !== "") {
      // Check if the user is logging in
      if (form.email === user.email && form.password === user.password) {
        // Set the user in the context
        setUser({
          fullName: user.fullName,
          email: user.email,
          password: user.password,
        });
        // Reset the form
        setForm(reset);
        // Show the success message
        setSuccess(true);
        // Hide the error message
        setError({});
        // Hide the success message after 15 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 15000);
      } else {
        // Set the user in the context
        setUser({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
        });
        // Reset the form
        setForm(reset);
        // Show the success message
        setSuccess(true);
        // Hide the error message
        setError({});
        // Hide the success message after 15 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 15000);
      } // end if
    } else {
      // Set the form error
      setFormError({
        fullName: form.fullName === "" ? "Full name is required" : "",
        email: form.email === "" ? "Email is required" : "",
        password: form.password === "" ? "Password is required" : "",
      });
    } // end if
  }; // end handleFormSubmit
  // Create a function to handle the form reset
  const handleFormReset = () => {
    // Reset the form
    setForm(reset);
    // Reset the form error
    setFormError({});
  }; // end handleFormReset
  // Create a state for the form success
  const [formSuccess, setFormSuccess] = useState(false);
  // Create a function to handle the form success
  const handleFormSuccess = () => {
    // Set the form success
    setFormSuccess(true);
    // Hide the form success after 15 seconds
    setTimeout(() => {
      setFormSuccess(false);
    }, 15000);
  }; // end handleFormSuccess

  return (
    <AuthContext.Provider
      value={{
        user: user,
        error: error,
        success: success,
        login: login,
        register: register,
        logout: logout,
        form: form,
        handleForm: handleForm,     
        formError: formError,
        handleFormError: handleFormError,
        handleFormSubmit: handleFormSubmit,
        handleFormReset: handleFormReset,
        formSuccess: formSuccess,
        handleFormSuccess: handleFormSuccess,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}; // end AuthProvider

export default AuthContextProvider;

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const login = (data) => {
//         // login logic
//         // set user
//         setUser(data);

//         // set loading
//         setLoading(false);

//         // set error
//         setError(null);

//         // redirect to home
//         window.location.href = '/';
//     }

//     const logout = () => {
//         // logout logic
//         // set user
//         setUser(null);

//         // set loading
//         setLoading(false);

//         // set error
//         setError(null);

//         // redirect to home
//         window.location.href = '/';
//     }

//     const register = (data) => {
//         // Register function
//         // set user
//         setUser(data);

//         // set loading
//         setLoading(false);

//         // set error
//         setError(null);

//         // redirect to home
//         window.location.href = '/';
//     }

//     useEffect(() => {
//         // Check if user is logged in
//         // set user
//         setUser(null);

//         // set loading
//         setLoading(false);

//         // set error
//         setError(null);

//     }, []);
//     return (
//         <AuthContext.Provider value={{ user, login, logout, register, loading, error }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export default AuthProvider;
