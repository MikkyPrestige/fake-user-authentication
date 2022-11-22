// LOGOUT COMPONENT FROM THE CONTEXT API
// This component is for the logout page in the app

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "./context/auth";

const Logout = () => {
  const { logout } = useContext(UserAuthContext);

  logout();

  return (
    <div className="logout">
      <h1 className="logout__title">Logout</h1>
      <p className="logout__message">
        You are now logged out. <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Logout;