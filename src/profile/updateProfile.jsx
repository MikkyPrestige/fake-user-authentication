// UPDATE PROFILE COMPONENT FROM THE CONTEXT API
// This component is for the update profile page in the app

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "./context/auth";

const UpdateProfile = () => {
  const { currentUser, updateProfile } = useContext(UserAuthContext);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState(currentUser.password);
  const [fullName, setFullName] = useState(currentUser.fullName);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(email, password, fullName);
  };

  return (
    <div className="update-profile">
      <h1 className="update-profile__title">Update Profile</h1>
      <form className="update-profile__form" onSubmit={handleUpdate}>
        <label className="update-profile__label" htmlFor="email">
          Email
        </label>
        <input
          className="update-profile__input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="update-profile__label" htmlFor="password">
          Password
        </label>
        <input
          className="update-profile__input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="update-profile__label" htmlFor="fullName">
          Full Name
        </label>
        <input
          className="update-profile__input"
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <button className="update-profile__button" type="submit">
          Update
        </button>
      </form>
      <p className="update-profile__message">
        Don't want to update? <Link to="/">Cancel</Link>
      </p>
    </div>
  );
};

export default UpdateProfile;
