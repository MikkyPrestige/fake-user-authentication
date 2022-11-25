// REQUIRE USER AUTHENTICATION COMPONENT
// This component is used to require user authentication for a route to the user profile.

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth"

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {  // If the user is not authenticated then redirect to the login page with the current location as the redirect path 
    return (
      <Navigate
        to={{
          pathname: "/login",
          state: { path: location.pathname },
        }}
      />
    );
  }

  return children;
};

export default RequireAuth;