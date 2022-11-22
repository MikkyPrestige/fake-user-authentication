// ERROR COMPONENT:   This component is for the error message in the app when the user routes to a page that doesn't exist

import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/error.css";

const Error = () => {
  retur (
    <div className="error">
      <h1 className="error__title">404</h1>
      <h2 className="error__heading">Page not found</h2>
      <p className="error__message">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="error__back--link">Go to Home</Link>
    </div>
  );
};

export default Error;