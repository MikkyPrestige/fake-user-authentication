// FALL BACK COMPONENT: This component is for the fallback message in the errorBoundary when there is an error in the  javascript code.

import React from "react";
import { Link } from "react-router-dom";

const FallBack = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default FallBack;
