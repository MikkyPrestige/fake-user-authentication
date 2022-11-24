// USER AUTHENTICATION CONTEXT
// This context is used to store the user authentication data and provide it to the rest of the application

import React, { createContext, useState, useContext } from "react";

// Create the context
const AuthContext = createContext({ user: null });

// Create the provider
const AuthProvider = ({ children }) => {
  // Create the state
  const [user, setUser] = useState(null);

  // Create the login function
  const login = (user) => {
    // Set the user
    setUser(user);
  };

  // Create the logout function
  const logout = () => {
    // Set the user
    setUser(null);
  };

  // Create sign up function
  const signUp = (user) => {
    // Set the user
    setUser(user);
  };

  // Return the provider
  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

// Context hook
const useAuth = () => useContext(AuthContext);

// Export the context and provider
export { AuthContext, AuthProvider, useAuth };
