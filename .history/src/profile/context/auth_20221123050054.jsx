// USER AUTHENTICATION CONTEXT
// This context is used to store the user authentication data and provide it to the rest of the application

import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const AuthContext = createContext({ user: null });

// Create the provider
const AuthProvider = ({ children }) => {
    // Create the state
    const [user, setUser] = useState(null);

  //  Create the effect
    useEffect(() => {
        // Get the user from local storage
        const user = JSON.parse(localStorage.getItem('user'));

        // Set the user
        setUser(user);
    }, []);

    // Create the login function
    const login = (user) => {
        // Set the user
        setUser(user);

        // Save the user to local storage
        // localStorage.setItem('user', JSON.stringify(user));
    };

    // Create the logout function
    const logout = () => {
        // Set the user
        setUser(null);

        // Remove the user from local storage
        // localStorage.removeItem('user');
    };

    // Return the provider
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create the useAuth hook
const useAuth = () => useContext(AuthContext);

// Export the AuthContext, AuthProvider, and useAuth
export { AuthContext, AuthProvider, useAuth };