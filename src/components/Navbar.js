/*import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>CycleCare</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/tracker">Tracker</Link></li>
        <li><Link to="/mood-tracker">Mood Tracker</Link></li>
        <li><Link to="/health-tips">Health Tips</Link></li>
        <li><Link to="/reminders">Reminders</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
*/
/*import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    navigate("/", { replace: true }); // Redirect to splash screen and prevent back navigation
    window.location.reload(); // Force page reload to clear session completely
  };

  return (
    <nav className="navbar">
      <h2>CycleCare</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/tracker">Tracker</Link></li>
        <li><Link to="/mood-tracker">Mood Tracker</Link></li>
        <li><Link to="/health-tips">Health Tips</Link></li>
        <li><Link to="/reminders">Reminders</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
*/


/*final
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    navigate("/", { replace: true }); // Redirect to splash screen and prevent back navigation
    window.location.reload(); // Force page reload to clear session completely
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search action here
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
    setSearchVisible(false); // Hide search after searching
  };

  return (
    <nav className="navbar">
      <h2>CycleCare</h2>
      <div className="navbar-actions">
        <button className="search-btn" onClick={toggleSearch}>
          Search
        </button>
        {searchVisible && (
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="search-input"
            />
          </form>
        )}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/tracker">Tracker</Link></li>
        <li><Link to="/mood-tracker">Mood Tracker</Link></li>
        <li><Link to="/health-tips">Health Tips</Link></li>
        <li><Link to="/reminders">Reminders</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </nav>
  );
}


export default Navbar;
*/

/*import React, { useState } from "react";
import { FaHome, FaHeartbeat, FaBell, FaSmile, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="sidebar">
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="/home"><FaHome /> Home</a>
          <a href="/tracker"><FaHeartbeat /> Tracker</a>
          <a href="/mood"><FaSmile /> Mood Tracker</a>
          <a href="/reminders"><FaBell /> Reminders</a>
          <a href="/logout"><FaSignOutAlt /> Logout</a>
        </nav>
      </div>
      <header className="header">
        <h1>Menstrual Health Tracker</h1>
      </header>
    </div>
  );
};

export default Navbar;
*/


/*
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHeartbeat, FaSmile, FaLightbulb, FaBell, FaSignOutAlt } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="brand">CycleCare</h2>
      <ul className="nav-links">
        <li><Link to="/"><FaHome className="icon" /> Dashboard</Link></li>
        <li><Link to="/tracker"><FaHeartbeat className="icon" /> Tracker</Link></li>
        <li><Link to="/mood-tracker"><FaSmile className="icon" /> Mood Tracker</Link></li>
        <li><Link to="/health-tips"><FaLightbulb className="icon" /> Health Tips</Link></li>
        <li><Link to="/reminders"><FaBell className="icon" /> Reminders</Link></li>
        <li className="logout"><Link to="/logout"><FaSignOutAlt className="icon" /> Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
*/
/*
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaHeartbeat, FaSmile, FaLightbulb, FaBell, FaSignOutAlt } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    navigate("/"); // Redirect to splash screen
  };

  return (
    <nav className="navbar">
      <h2 className="brand">CycleCare</h2>
      <ul className="nav-links">
        <li><Link to="/dashboard"><FaHome className="icon" /> Dashboard</Link></li>
        <li><Link to="/tracker"><FaHeartbeat className="icon" /> Tracker</Link></li>
        <li><Link to="/mood-tracker"><FaSmile className="icon" /> Mood Tracker</Link></li>
        <li><Link to="/health-tips"><FaLightbulb className="icon" /> Health Tips</Link></li>
        <li><Link to="/reminders"><FaBell className="icon" /> Reminders</Link></li>
        <li className="logout" onClick={handleLogout}>
          <FaSignOutAlt className="icon" /> Logout
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
*/
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaHeartbeat, FaSmile, FaLightbulb, FaBell, FaSignOutAlt } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Define paths where the navbar should be hidden
  const hiddenPaths = ["/", "/register", "/login"];

  // Check if the current path is in the hidden paths list
  if (hiddenPaths.includes(location.pathname)) {
    return null; // Do not render the Navbar on these pages
  }

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    navigate("/"); // Redirect to splash screen
  };

  return (
    <nav className="navbar">
      <h2 className="brand">CycleCare</h2>
      <ul className="nav-links">
        <li><Link to="/dashboard"><FaHome className="icon" /> Dashboard</Link></li>
        <li><Link to="/tracker"><FaHeartbeat className="icon" /> Tracker</Link></li>
        <li><Link to="/mood-tracker"><FaSmile className="icon" /> Mood Tracker</Link></li>
        <li><Link to="/health-tips"><FaLightbulb className="icon" /> Health Tips</Link></li>
        <li><Link to="/reminders"><FaBell className="icon" /> Reminders</Link></li>
        <li className="logout" onClick={handleLogout}>
          <FaSignOutAlt className="icon" /> Logout
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;



