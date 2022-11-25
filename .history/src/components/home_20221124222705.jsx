// HOME COMPONENT - This is the main component for the home page
// It contains the main content for the home page

import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/home.css";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="home__content">
        {/* <h1 className="home__title">Welcome to the Home Page</h1>
        <p className="home__text">
            This is the home page for the React Authentication App. You can login
            or register to access the user dashboard.
        </p> */}
        <h1 className="home__title">Connect to your Dry Cleaner</h1>
        <p className="home__description">
          Wash & fold, drop off and pickup & delivery laundry service in Asaba,
          Delta State.
        </p>
        <p>Visit our website <a href="https://mac"</p>
        <p>
          Contact us on <a href="tel: ">08030849685</a> and <a href="mailto: ">meekyberry@gmail.com</a>
        </p>
        <Link to="/signUp" className="home__link">
            Get started
          </Link>
        {/* <div className="home__links"> */}
          {/* <Link to="/login" className="home__sign">
            Login
          </Link> */}
          {/* <Link to="/signUp" className="home__link">
            Get started
          </Link> */}
          {/* <Link to="/signUp" className="home__sign">
            Sign Up
          </Link> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
