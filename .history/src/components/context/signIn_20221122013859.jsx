// USER AUTHENTICATION CONTEXT: This is the context for the user authentication in the app (signin and register)

import React, { createContext, useState, useEffect } from 'react';


export const AuthContext = createContext({
    user: null,
    login: (data) => {},
    logout: () => {},
    register: (data) => {},
    update: (data) => {},
    delete: (data) => {},
    error: null,
    setError: (error) => {},
    clearError: () => {},
    loading: false,
    setLoading: (loading) => {},
});
