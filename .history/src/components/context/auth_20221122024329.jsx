// USER AUTHENTICATION:
// Set up fake userAuthContext using the context API to always carry out a fake authentication, extract out a custom hook to get the currently logged-in user.

import React, { useState, useContext, createContext } from "react";

const userAuthContext = createContext();

export const useUserAuth = () => {
  return useContext(userAuthContext);
};

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    email: "john@gmail,com",
    password: "123456"
  });

  return (
    <userAuthContext.Provider value={{ user, setUser }}>
      {children}
    </userAuthContext.Provider>
  );
};
