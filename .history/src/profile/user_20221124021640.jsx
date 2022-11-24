// USER COMPONENT:
// This component is for the user profile in the app
// extract out a custom hook to get the currently logged-in user.

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/auth";

const User = () => {
  const auth = useAuth();
  const user = auth.user;

  return (
    <div className="user">
      <h1>User Profile</h1>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <Link to="/login/logout">Logout</Link>
      </p>
    </div>
  );
};

export default User;