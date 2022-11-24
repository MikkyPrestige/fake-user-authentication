// USER AUTHENTICATION CONTEXT
// This context is used to store the user authentication data and provide it to the rest of the application

import React, { createContext, useState, useContext } from "react";

// Create the context
const AuthContext = createContext({
  user: {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
});

// Create the provider
const AuthProvider = ({ children }) => {
  // Create the state
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Login the user
  const login = (userName, password) => {
    setUser({
      userName,
      password,
    });
  };

  // Sign up the user
  const signUp = (userName, password, email) => {
    setUser({
      userName,
      password,
      email,
    });
  };

  // Logout the user
  const logout = () => {
    setUser({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // Return the provider
  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create the hook
const useAuth = () => useContext(AuthContext);

// Export the provider and the hook
export { AuthProvider, useAuth };