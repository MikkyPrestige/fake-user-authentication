// USER COMPONENT:
// This component is for the user profile in the app
// extract out a custom hook to get the currently logged-in user.

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/auth";

const User = () => {
  const auth = useAuth();
  const user = auth.user;
  const token = auth.token;

  return (
    <div className="user">
      <h1>User Profile</h1>
      <h2>{user}</h2>
      <h2>{token}</h2>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default User;