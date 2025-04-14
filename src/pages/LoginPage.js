/*import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h2>Login to CycleCare</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <span onClick={() => navigate("/register")}>Register</span></p>
    </div>
  );
};

export default LoginPage;
*/













/*
// THis IS MY CODE 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication - Replace with API call if needed
    if (email === "test@example.com" && password === "password") {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Invalid credentials!"); // Show error message
    }
  };

  return (
    <div className="login-container">
      <h2>Login to CycleCare</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <span onClick={() => navigate("/register")}>Register</span>
      </p>
    </div>
  );
};

export default LoginPage;
*/

/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login Response:", data); // Debugging

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user)); // Save user details
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError(data.message || "Invalid credentials!");
      }
    } catch (err) {
      setError("Server error! Please try again later.");
      console.error("Login Error:", err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login to CycleCare</h2>
      <form onSubmit={handleLogin}>
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
        {error && <p className="error">{error}</p>} 
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <span onClick={() => navigate("/register")}>Register</span>
      </p>
    </div>
  );
};

export default LoginPage;
*/



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import API_BASE_URL from "../config"; // Import API base URL
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To handle error messages
  const navigate = useNavigate();
/*
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Store JWT token
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user details
        navigate("/dashboard"); // Redirect to Dashboard
      } else {
        setError(data.message || "Invalid credentials!"); // Display error message
      }
    } catch (err) {
      setError("Something went wrong! Please try again.");
    }
  };
*/
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");
      localStorage.setItem("token", data.token); 
      localStorage.setItem("userId", data.userId);
      console.log("Navigating to dashboard...");
      /*setTimeout(() => {
        navigate("/dashboard");
      }, 100); */
      navigate("/dashboard");
    } else {
      setError(data.message); // Use setError to store the error message
    }
  } catch (error) {
    setError("Login failed: " + error.message); // Set the error message here
    console.error("Error during login:", error);
  }
};


  return (
    <div className="login-container">
      <h3>Login to CycleCare</h3>
      <form onSubmit={handleLogin}>
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
        {error && <p className="error">{error}</p>} {/* Show error message */}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <span onClick={() => navigate("/register")}>Register</span>
      </p>
    </div>
  );
};

export default LoginPage;
