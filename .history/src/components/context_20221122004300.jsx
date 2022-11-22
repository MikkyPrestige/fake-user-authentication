// USER AUTHENTICATION CONTEXT: ?? This is the context for the user authentication in the app (login and register)

import React, { createContext, useState } from "react";
const Authentication = () => {
  // Create user context
  const UserAuthContext = createContext();
  // Create a state for the user
  const [user, setUser] = useState({
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    password


//   useEffect(() =&gt; {
//     checkLogin();
//   }, [ ]);


// const [loading, setLoading] = useState(false)

// const [user, setUser] = useState({
//     fullName: "John Doe",
//     email: "johndoe@gmail.com",
//     password: "123456",
//   });

//   // Create a function to check if the user is logged in
//   const checkLogin = () => {
//     // Check if the user is logged in
//     if (user.email !== "") {
//       // Set the user to the state
//       setUser(user);
//     }
//   };

//   // Create a function to login the user
//   const login = () => {
//     // Set the user to the state
//     setUser(user);
//   }

//   // Create a function to register the user
//   const register = () => {
//     // Set the user to the state
//     setUser(user);
//   }

//   // Create a function to logout the user
//   const logout = () => {
//     // Set the user to the state
//     setUser({
//       fullName: "",
//       email: "",
//       password: "",
//     });
//   }

//   return (
//     <UserAuthContext.Provider
//       value={{
//         user,
//         setUser,
//         loading,
//         setLoading,
//         checkLogin,
//         login,
//         register,
//         logout,
//       }}
//     >
//       {children}
//     </UserAuthContext.Provider>
//   );
// };

// export default UserAuthContextProvider;