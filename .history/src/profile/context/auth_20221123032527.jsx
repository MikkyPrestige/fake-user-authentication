// USER AUTHENTICATION CONTEXT
// This context is used to store the user authentication data and provide it to the rest of the application

import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// Create the provider
export const AuthProvider = ({ children }) => {
    // Create the state
    const [user, setUser] = useState(null);

    // Create the effect
    useEffect(() => {
        // Get the user from local storage
        const user = JSON.parse(localStorage.getItem('user'));

        // Set the user
        setUser(user);
    }, []);

    //
};

// Export the context
export default AuthContext;