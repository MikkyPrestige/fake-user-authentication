// RESET PASSWORD COMPONENT FROM THE CONTEXT API
// This component is for the reset password page in the app

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "./context/auth";

const ResetPassword = () => {
  const { resetPassword } = useContext(UserAuthContext);
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    resetPassword(email);
  };

  return (
    <div className="resetPassword">
      <h1 className="resetPassword__title">Reset Password</h1>
      <form className="resetPassword__form" onSubmit={handleResetPassword}>
        <label className="resetPassword__label" htmlFor="email">
          Email
        </label>
        <input
          className="resetPassword__input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="resetPassword__button" type="submit">
          Reset Password
        </button>
      </form>
      <p className="resetPassword__message">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default ResetPassword;
