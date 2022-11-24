// LOGOUT COMPONENT:
// This component is for the logout page in the app

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/auth";

const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    auth.logout();
    navigate("/");
  });

  return null;
};

export default Logout;