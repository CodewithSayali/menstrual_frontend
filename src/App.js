/*import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tracker from "./pages/Tracker";
import MoodTracker from "./pages/MoodTracker";
import HealthTips from "./pages/HealthTips";
import Reminders from "./pages/Reminders";
import Reports from "./pages/Reports";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/health-tips" element={<HealthTips />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
*/


/*
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tracker from "./pages/Tracker";
import MoodTracker from "./pages/MoodTracker";
import HealthTips from "./pages/HealthTips";
import Reminders from "./pages/Reminders";
import Reports from "./pages/Reports";
import SplashScreen from "./components/SplashScreen";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tracker" element={<Tracker />} />
                <Route path="/mood-tracker" element={<MoodTracker />} />
                <Route path="/health-tips" element={<HealthTips />} />
                <Route path="/reminders" element={<Reminders />} />
                <Route path="/reports" element={<Reports />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
*/

/*
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tracker from "./pages/Tracker";
import MoodTracker from "./pages/MoodTracker";
import HealthTips from "./pages/HealthTips";
import Reminders from "./pages/Reminders";
import Reports from "./pages/Reports";
import SplashScreen from "./components/SplashScreen";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

// Protected Route Component
const PrivateRoute = ({ element }) => {
  const user = localStorage.getItem("user");
  return user ? element : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        // Splash Screen (Initial Route) 
        <Route path="/" element={<SplashScreen />} />

        // Authentication Routes 
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        // Protected Routes - Requires Login 
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                <Route path="/tracker" element={<PrivateRoute element={<Tracker />} />} />
                <Route path="/mood-tracker" element={<PrivateRoute element={<MoodTracker />} />} />
                <Route path="/health-tips" element={<PrivateRoute element={<HealthTips />} />} />
                <Route path="/reminders" element={<PrivateRoute element={<Reminders />} />} />
                <Route path="/reports" element={<PrivateRoute element={<Reports />} />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
*/





import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tracker from "./pages/Tracker";
import MoodTracker from "./pages/MoodTracker";
import HealthTips from "./pages/HealthTips";
import Reminders from "./pages/Reminders";
import Reports from "./pages/Reports";
import SplashScreen from "./components/SplashScreen";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

/*
// Protected Route Component
const PrivateRoute = ({ Component }) => {
  const user = localStorage.getItem("user");
  return user ? <Component /> : <Navigate to="/" />;
};
*/
// Protected Route Component
const PrivateRoute = ({ Component }) => {
  const token = localStorage.getItem("token");
  return token ? <Component /> : <Navigate to="/login" />;
};


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<SplashScreen />} />

          
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          
          <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
          <Route path="/tracker" element={<PrivateRoute Component={Tracker} />} />
          <Route path="/mood-tracker" element={<PrivateRoute Component={MoodTracker} />} />
          <Route path="/health-tips" element={<PrivateRoute Component={HealthTips} />} />
          <Route path="/reminders" element={<PrivateRoute Component={Reminders} />} />
          <Route path="/reports" element={<PrivateRoute Component={Reports} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;




