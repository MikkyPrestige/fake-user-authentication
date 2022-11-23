// USER AUTHENTICATION CONTEXT
// This context is used to store the user authentication data and provide it to the rest of the application

import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the auth context
export const AuthContext = createContext({
    user: null,
    loading: true,
    login: () => {},
    logout: () => {},
    register: () => {},
}
);

// Create the auth provider
const AuthProvider = ({ children }) => {
    // Create the state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Get the navigate function
    const navigate = useNavigate();

    // Create the login function
    const login = async (data) => {
        // Set the user
        setUser(data);

        // Navigate to the user page
        navigate('/user');
    };

    // Create the logout function
    const logout = async () => {
        // Set the user
        setUser(null);

        // Navigate to the login page
        navigate('/login');
    };

    // Create the register function
    const register = async (data) => {
        // Set the user
        setUser(data);

        // Navigate to the user page
        navigate('/user');
    };

    // Create the useEffect hook
    useEffect(() => {
        // Check if the user is null
        if (user === null) {
            // Navigate to the login page
            navigate('/login');
        }

        // Set the loading to false
        setLoading(false);
    }, [user, navigate]);

    // Return the auth provider
    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Export the auth context
export default AuthProvider;