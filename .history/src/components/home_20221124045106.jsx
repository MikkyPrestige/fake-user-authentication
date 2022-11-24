// HOME COMPONENT - This is the main component for the home page
// It contains the main content for the home page

import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__title">Connect to your Dry Cleaner</h1>
        <p className="home__description">
          Wash & fold, drop off and pickup & delivery laundry service in Asaba,
          Delta State.
        </p>
        <Link to="/signUp" className="home__link">
          Get started
        </Link>
        <div className="home__links">
          <Link to="/login" className="home__link">
            Login
          </Link>
          <Link to="/signUp" className="home__link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
