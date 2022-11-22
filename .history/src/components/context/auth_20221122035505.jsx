// USER AUTHENTICATION:
// Set up fake userAuthContext using the context API to always carry out a fake authentication

import React, { useState, useContext, createContext } from "react";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export const useUserAuth = () => useContext(UserAuthContext);

