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
      email: "
