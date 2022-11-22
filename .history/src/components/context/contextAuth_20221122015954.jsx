// USER AUTHENTICATION CONTEXT: This is the context for the user authentication in the app (signin and register)

import React, { createContext, useState, useEffect } from 'react';


export const AuthContext = createContext({
    user:
});

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const login = (data) => {
//         // login logic
//         // set user
//         setUser(data);

//         // set loading
//         setLoading(false);

//         // set error
//         setError(null);

//         // redirect to home
//         window.location.href = '/';
//     }

//     const logout = () => {
//         // logout logic
//         // set user
//         setUser(null);

//         // set loading
//         setLoading(false);

//         // set error
//         setError(null);

//         // redirect to home
//         window.location.href = '/';
//     }

//     const register = (data) => {
//         // Register function
//         // set user
//         setUser(data);

//         // set loading
//         setLoading(false);

//         // set error
//         setError(null);

//         // redirect to home
//         window.location.href = '/';
//     }

//     useEffect(() => {
//         // Check if user is logged in
//         // set user
//         setUser(null);

//         // set loading
//         setLoading(false);

//         // set error
//         setError(null);


//     }, []);
//     return (
//         <AuthContext.Provider value={{ user, login, logout, register, loading, error }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }


export default AuthProvider;