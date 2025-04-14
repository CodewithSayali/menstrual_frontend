/*import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <h2>Register for CycleCare</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
    </div>
  );
};

export default RegisterPage;
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
/*
  const handleRegister = (e) => {
    e.preventDefault();

    // Store user data in localStorage (Replace with API call if needed)
    localStorage.setItem("user", JSON.stringify({ fullName, email }));
    navigate("/dashboard"); // Redirect to Dashboard
  };
  */
  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: fullName, email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        // Store the token in local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        alert("Registration successful!");
        /*setTimeout(() => {
          navigate("/dashboard");
        }, 100);*/
        navigate("/dashboard"); // Redirect to Dashboard
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred during registration.");
      console.error("Registration error:", error);
    }
  };
  
  return (
    <div className="register-container">
      <h3>Register for CycleCare</h3>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <span onClick={() => navigate("/login")}>Login</span>
      </p>
    </div>
  );
};

export default RegisterPage;
