// REQUIRE USER AUTHENTICATION COMPONENT
// This component is used to require user authentication for a route.

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/auth";

const RequireAuth = ({ children }) => {
