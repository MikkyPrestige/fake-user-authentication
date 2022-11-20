// NAVIGATION COMPONENT

import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="navigation--links">
        <div className="navigation--link">
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "black" }
            }
            to="/"
            className="navigation__link--item"
            exact
          >
            Home
          </NavLink>
        </div>
        <div className="navigation--link">
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "black" }
            }
            to="/signIn"
            className="navigation__link--item"
          >
            Sign In
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "black" }
            }
            to="/join"
            className="navigation__link--item"
          >
            Join Now
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
