// USER COMPONENT:
// This component is for the user profile in the app
// extract out a custom hook to get the currently logged-in user.

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/auth";
import "../assets/styles/user.css";
import { Helmet } from "react-helmet";

const User = () => {
  const auth = useAuth();

  return (
    <div className="user">
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <h1 className="user__title">Your DashBoard</h1>
      <h2 className="user__heading">
        Welcome <strong>{auth.user.userName}</strong>!
      </h2>
      <p className="user__text">You logged in {auth.user.email}</p>
      <div className="user__links">
        <Link to="/logout" className="user__link">
          Logout
        </Link>
        <Link to="/" className="user__back--link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default User;
