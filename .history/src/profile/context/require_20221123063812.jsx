// REQUIRE USER AUTHENTICATION COMPONENT
// This component is used to require user authentication for a route.

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/auth";