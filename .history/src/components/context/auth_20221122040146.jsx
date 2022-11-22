// USER AUTHENTICATION:
// Set up fake userAuthContext using the context API to always carry out a fake authentication

import React, { useState, useContext, createContext } from "react";

// Create a context object
const UserAuthContext = createContext(null);


