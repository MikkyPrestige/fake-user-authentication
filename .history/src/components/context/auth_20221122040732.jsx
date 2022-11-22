// USER AUTHENTICATION:
// Set up fake userAuthContext using the context API to always carry out a fake authentication

import React, { useState, useContext, createContext } from "react";

// Create a context object
const UserAuthContext = createContext(null);

// Create context provider
const UserAuthProvider = ({ children }) => {
  // Create a state to hold the user object
  const [user, setUser] = useState(null);

  // Create a function to log the user in
  const logIn = (email, password) => {
    // Fake authentication
    const fakeUser = {
      email: "",
      password: "",
      fullName: ""
    };
    setUser(fakeUser);
  };

  // Create a function to log the user out
  const logOut = () => {
    setUser(null);
  };

  // Create a function to check if the user is logged in
  const isLoggedIn = () => {
    return !!user;
  };

  // Create a function to get the currently logged-in user
  const getCurrentUser = () => {
    return user;
  };

