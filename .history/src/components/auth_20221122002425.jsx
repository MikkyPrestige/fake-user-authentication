// AUTHENTICATION COMPONENT: This component is for the authentication in the app (login and register)
// Set up fake userAuthContext using the context API to always carry out a fake authentication

import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { UserAuthContext } from "../context/userAuthContext";
import "../assets/styles/auth.css";

const Auth = ({ match }) => {
  // Get the user from the context
  const { user, setUser } = useContext(UserAuthContext);
  // Create a state for the form
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // Create a state for the error
  const [error, setError] = useState({});
  // Create a state for the success
  const [success, setSuccess] = useState(false);
  // Create a state for reset
  const [reset] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Create a function to handle the form
  const handleChange = (e) => {
    setForm({
      ...form,