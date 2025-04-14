/*import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreen.css";

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="splash-container">
      <div className="splash-content">
        <h1>Welcome to CycleCare</h1>
        <p>Your personal menstrual cycle and health tracker.</p>
        <div className="splash-buttons">
          <button className="register-btn" onClick={() => navigate("/register")}>
            Register
          </button>
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
*/
// src/pages/SplashScreen.js
//import React from "react";


/*
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreen.css";
import logo from "./assets/Logo.jpg"; // Update with correct path

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user"); // Assuming you store user data in localStorage
    if (user) {
      navigate("/dashboard"); // Redirect to dashboard
    }
  }, [navigate]);


  return (
    <div className="splash-container">
      <div className="splash-content">
        <div className="splash-logo-container">
          <img src={logo} alt="CycleCare Logo" className="splash-logo" />
        </div>
        <h1 className="splash-title">CycleCare</h1>
        <p className="splash-intro">Your personal menstrual cycle and health tracker.</p>
        <div className="splash-buttons">
          <button className="splash-btn register" onClick={() => navigate("/register")}>
            Sign up
          </button>
          <button className="splash-btn login" onClick={() => navigate("/login")}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
*/


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreen.css";
import logo from "./assets/Logo.jpg";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard"); // Redirect to dashboard if logged in
    }
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="splash-content">
        <img src={logo} alt="CycleCare Logo" className="splash-logo" />
        <h1 className="splash-title">CycleCare</h1>
        <p className="splash-intro">Your personal menstrual cycle and health tracker.</p>
        <div className="splash-buttons">
          <button className="splash-btn register" onClick={() => navigate("/register")}>Sign up</button>
          <button className="splash-btn login" onClick={() => navigate("/login")}>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
