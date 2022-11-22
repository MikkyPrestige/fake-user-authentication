// USER COMPONENT:
// This component is for the user profile in the app
// extract out a custom hook to get the currently logged-in user.

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../context/auth";

const User = () => {
  const { user } = useContext(UserAuthContext);
  return (
    <div className="user">
      <h1 className="user__title">User Profile</h1>
      <h2 className="user__heading">Welcome {user.fullName}</h2>
      <p className="user__message">You are logged in as {user.email}</p>
      <Link to="/" className="user__back--link">Go to Home</Link>
    </div>
  );
};

export default User;