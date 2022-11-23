// NAVIGATION COMPONENT

import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="navigation__links">
        <div className="navigation--link">
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "black" }
            }
            to="/"
            className="navigation__link--item"
          >
            Home
          </NavLink>
        </div>
        <div className="navigation__link--wrapper">
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "black" }
            }
            to="/login"
            className="navigation__link--item"
          >
             LogIn
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red" } : { color: "black" }
            }
            to="/booking"
            className="navigation__link--item"
          >
            Bookings
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
