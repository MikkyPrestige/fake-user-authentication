// NAVIGATION COMPONENT

import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
    <nav className="navigation--links">
        <div className="navigation--links__item">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        to="/"
        className="navigation__link"
        exact
      >
        Home
      </NavLink>
        </div>
        <div className="navigation--links__item">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        to="/signIn"
        className="navigation__link"
      >
        Sign In
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        to="/join"
        className="navigation__link"
      >
        Join Now
      </NavLink>
        </div>
    </nav>
    </div>
  );
};

export default Navigation;
