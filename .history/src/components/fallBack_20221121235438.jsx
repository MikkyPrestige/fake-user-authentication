// FALL BACK COMPONENT: This component is for the fallback message in the errorBoundary when there is an error in the  javascript code.

import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/fallBack.css";

const FallBack = ({error}) => {
  return (
    <div className="fallBack">
      <h1 className="fallBack__title">Something went wrong</h1>
      <h2 className="fallBack__heading">Please try again later</h2>
      <p className="fallBack__message">{error.message}</p>
      <Link to="/" className="fallBack__back--link">Go to Home</Link>
    </div>
  );
}

export default FallBack;