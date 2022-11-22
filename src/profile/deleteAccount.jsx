// DELETE ACCOUNT COMPONENT FROM THE CONTEXT API
// This component is for the delete account button in the app

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "./context/auth";

const DeleteAccount = () => {
  const { deleteAccount } = useContext(UserAuthContext);

  deleteAccount();

  return (
    <div className="deleteAccount">
      <h1 className="deleteAccount__title">Delete Account</h1>
      <p className="deleteAccount__message">
        Your account has been deleted. <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default DeleteAccount;
