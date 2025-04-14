/*import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Menstrual Tracker</h1>
      <div className="cycle-info">
        <p>Next Predicted Period: <strong>March 15, 2025</strong></p>
        <p>Current Phase: <strong>Follicular</strong></p>
      </div>
    </div>
  );
};

export default Dashboard;
*/

/*the UIdesign
import { useState } from "react";
import { FaRegCalendarAlt, FaRegHeart, FaRegLightbulb, FaBell, FaSignOutAlt } from "react-icons/fa";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("tracker");

  return (
    <div className="dashboard-container" style={{ display: "flex", backgroundColor: "#eaf6f5", height: "100vh" }}>
     
      <aside className="sidebar">
        <h2 className="sidebar-title">CycleCare Dashboard</h2>
        <nav>
          <ul className="sidebar-menu">
            <li className={activeTab === "tracker" ? "active-tab" : ""} onClick={() => setActiveTab("tracker")}>
              <FaRegCalendarAlt className="icon" /> Tracker
            </li>
            <li className={activeTab === "mood" ? "active-tab" : ""} onClick={() => setActiveTab("mood")}> 
              <FaRegHeart className="icon" /> Mood Tracker
            </li>
            <li className={activeTab === "health" ? "active-tab" : ""} onClick={() => setActiveTab("health")}> 
              <FaRegLightbulb className="icon" /> Health Tips
            </li>
            <li className={activeTab === "reminders" ? "active-tab" : ""} onClick={() => setActiveTab("reminders")}> 
              <FaBell className="icon" /> Reminders
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content" style={{ flex: 1, padding: "20px" }}>
        <header className="header">
          <h1 className="header-title">Welcome to Your Menstrual Tracker</h1>
          <p className="subtitle">Track, manage, and optimize your cycle health.</p>
          <Button className="logout-button">
            <FaSignOutAlt className="icon" /> Logout
          </Button>
        </header>

        <div className="grid-container stats-container">
          <Card>
            <CardContent>
              <h3 className="card-title">Next Predicted Period</h3>
              <p className="card-text">March 15, 2025</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="card-title">Current Phase</h3>
              <p className="card-text">Follicular</p>
            </CardContent>
          </Card>
        </div>

        
        <div className="tabs">
          <span className={activeTab === "tracker" ? "active-tab" : ""} onClick={() => setActiveTab("tracker")}>
            Tracker
          </span>
          <span className={activeTab === "mood" ? "active-tab" : ""} onClick={() => setActiveTab("mood")}>
            Mood Tracker
          </span>
          <span className={activeTab === "health" ? "active-tab" : ""} onClick={() => setActiveTab("health")}>
            Health Tips
          </span>
          <span className={activeTab === "reminders" ? "active-tab" : ""} onClick={() => setActiveTab("reminders")}>
            Reminders
          </span>
        </div>

        
        <div className="grid-container">
          <Card>
            <CardContent>
              <img src="/images/cycle-tracker.jpg" alt="Track Cycle" className="card-image" />
              <h3 className="card-title">Track Your Cycle</h3>
              <p>Monitor your cycle length, predict your next period, and get insights.</p>
              <Button className="primary-button">Learn More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <img src="/images/mood-tracker.jpg" alt="Track Mood" className="card-image" />
              <h3 className="card-title">Track Your Mood</h3>
              <p>Log your mood daily to identify patterns and improve mental health.</p>
              <Button className="primary-button">Log Mood</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent>
              <img src="/images/health-tips.jpg" alt="Health Tips" className="card-image" />
              <h3 className="card-title">Health Tips</h3>
              <p>Get personalized health and nutrition tips for every phase.</p>
              <Button className="primary-button">Explore</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <img src="/images/reminders.jpg" alt="Set Reminders" className="card-image" />
              <h3 className="card-title">Set Reminders</h3>
              <p>Stay on top of your cycle with custom reminders.</p>
              <Button className="primary-button">Set Rem.</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
*/



/*import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [phase, setPhase] = useState("");
    const [nutrition, setNutrition] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");  // Ensure user is authenticated
                const phaseResponse = await axios.get("/api/period/phase", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setPhase(phaseResponse.data.phase);

                const nutritionResponse = await axios.get("/api/period/nutrition", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setNutrition(nutritionResponse.data.nutrition);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Your Menstrual Phase: {phase}</h2>
            <h3>Recommended Nutrition: {nutrition}</h3>
        </div>
    );
};

export default Dashboard;
*/



/*import { useState, useEffect } from "react";

export default function Dashboard() {
  const [nextPeriod, setNextPeriod] = useState("Loading...");
  const [currentPhase, setCurrentPhase] = useState("Loading...");

  useEffect(() => {
    fetch("/api/cycle-data")
      .then((res) => res.json())
      .then((data) => {
        setNextPeriod(data.nextPeriod);
        setCurrentPhase(data.currentPhase);
      });
  }, []);

  return (
    <div>
      <h3>Next Predicted Period: {nextPeriod}</h3>
      <h3>Current Phase: {currentPhase}</h3>
    </div>
  );
}
  */

/*
import { useState, useEffect } from "react";
import CycleChart from "./CycleChart";

export default function Dashboard() {
  const [nextPeriod, setNextPeriod] = useState("Loading...");
  const [currentPhase, setCurrentPhase] = useState("Loading...");

  useEffect(() => {
    fetch("/api/cycle-data")
      .then((res) => res.json())
      .then((data) => {
        setNextPeriod(data.nextPeriod);
        setCurrentPhase(data.currentPhase);
      });
  }, []);

  return (
    <div>
      <h3>Next Predicted Period: {nextPeriod}</h3>
      <h3>Current Phase: {currentPhase}</h3>
      <CycleChart />
    </div>
  );
}
*/

/*
import { useState, useEffect } from "react";
import CycleChart from "./CycleChart";
import API_BASE_URL from "../config"; // Import the API base URL

export default function Dashboard() {
  const [nextPeriod, setNextPeriod] = useState("Loading...");
  const [currentPhase, setCurrentPhase] = useState("Loading...");

  useEffect(() => {
    fetch(`${API_BASE_URL}/cycle-data`) // Use the backend URL
      .then((res) => res.json())
      .then((data) => {
        setNextPeriod(data.nextPeriod);
        setCurrentPhase(data.currentPhase);
      })
      .catch((error) => console.error("Error fetching cycle data:", error));
  }, []);

  return (
    <div>
      <h3>Next Predicted Period: {nextPeriod}</h3>
      <h3>Current Phase: {currentPhase}</h3>
      <CycleChart />
    </div>
  );
}
*/

/*
import { useState, useEffect } from "react";
import CycleChart from "./CycleChart";
import API_BASE_URL from "../config";

export default function Dashboard() {
  const [nextPeriod, setNextPeriod] = useState("Loading...");
  const [currentPhase, setCurrentPhase] = useState("Loading...");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("❌ No token found! Please login again.");
      setMessage("Please login to view your cycle data.");
      return;
    }

    fetch(`${API_BASE_URL}/cycle-data`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cycle data");
        return res.json();
      })
      .then((data) => {
        setNextPeriod(data.nextPeriod);
        setCurrentPhase(data.currentPhase);
      })
      .catch((error) => {
        console.error("Error fetching cycle data:", error);
        setMessage("Error fetching cycle data.");
      });
  }, []);

  return (
    <div>
      {message && <p>{message}</p>}
      <h3>Next Predicted Period: {nextPeriod}</h3>
      <h3>Current Phase: {currentPhase}</h3>
      <CycleChart />
    </div>
  );
}
*/
/*
import { useState, useEffect } from "react";
import CycleChart from "./CycleChart";

export default function Dashboard() {
  const [nextPeriod, setNextPeriod] = useState("Loading...");
  const [currentPhase, setCurrentPhase] = useState("Loading...");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("❌ No token found! Please login again.");
      setMessage("Please login to view your cycle data.");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cycles/cycle-data", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch cycle data");

        const data = await response.json();
        console.log("Fetched Data from Backend:", data);

        setNextPeriod(data.nextPeriod);
        setCurrentPhase(data.currentPhase);
        setMessage("");
      } catch (error) {
        console.error("Error fetching cycle data:", error);
        setMessage("Error fetching cycle data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {message && <p>{message}</p>}
      <h3>Next Predicted Period: {nextPeriod}</h3>
      <h3>Current Phase: {currentPhase}</h3>
      <CycleChart />
    </div>
  );
}
*/

/*
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
//import CycleChart from "./CycleChart";
//<CycleChart />

export default function Dashboard() {
  const [nextPeriod, setNextPeriod] = useState("Loading...");
  const [currentPhase, setCurrentPhase] = useState("Loading...");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token found in Dashboard: ", token); 
    if (!token) {
      console.error("❌ No token found! Please login again.");
      setMessage("Please login to view your cycle data.");
      navigate("/");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cycles/cycle-data", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch cycle data");

        const data = await response.json();
        console.log("Fetched Data from Backend:", data);

        setNextPeriod(data.nextPeriod || "Not available");
        setCurrentPhase(data.currentPhase || "Not available");
        setMessage("");
      } catch (error) {
        console.error("Error fetching cycle data:", error);
        setMessage("Error fetching cycle data.");
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      {message && <p>{message}</p>}
      <h3>Next Predicted Period: {nextPeriod}</h3>
      <h3>Current Phase: {currentPhase}</h3>
      
    </div>
  );
}
*/
/*
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [nextPeriod, setNextPeriod] = useState("Loading...");
  const [currentPhase, setCurrentPhase] = useState("Loading...");
  const [message, setMessage] = useState("");
  const [fact, setFact] = useState("Loading fun fact...");
  const [username, setUsername] = useState("User");
  const navigate = useNavigate();

  const menstrualFacts = useMemo(() => [
    "Did you know? The average menstrual cycle lasts around 28 days, but it can vary from 21 to 35 days.",
    "Tip: Staying hydrated can help reduce bloating during your period!",
    "Interesting Fact: Regular exercise can help reduce cramps and improve mood during menstruation.",
    "Your period might be irregular for the first few years after menstruation starts.",
    "Foods rich in magnesium like dark chocolate can help reduce cramps."
  ], []);

  const phaseDescriptions = {
    "menstrual phase": "Rest and relaxation can help manage cramps and fatigue.",
    "follicular phase": "Energy levels may be rising. It's a great time for creativity and productivity!",
    "ovulation phase": "You might feel more social and confident during this phase.",
    "luteal phase": "Mood swings or cravings might occur. Self-care can help!",
    "cycle ended": "Cycle has ended. Track your next cycle to stay prepared."
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (!token) {
      setMessage("Please login to view your cycle data.");
      navigate("/");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cycles/cycle-data", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch cycle data");

        const data = await response.json();
        setNextPeriod(data.nextPeriod || "Not available");

        const normalizedPhase = data.currentPhase.trim().toLowerCase();
        console.log("Normalized Phase:", normalizedPhase); // Debugging
        setCurrentPhase(normalizedPhase);

        setMessage("");
        setFact(menstrualFacts[Math.floor(Math.random() * menstrualFacts.length)]);
      } catch (error) {
        setMessage("Error fetching cycle data.");
      }
    };

    fetchData();
  }, [navigate, menstrualFacts]);

  return (
    <div>
      {message && <p>{message}</p>}
      <h3>Hello, {username}!</h3>
      <h4>Next Predicted Period: {nextPeriod}</h4>
      <h4>Current Phase: {currentPhase}</h4>
      <p>{phaseDescriptions[currentPhase] || "Description not available"}</p>
      <p>💡 Fun Fact: {fact}</p>
    </div>
  );
}
*/
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [nextPeriod, setNextPeriod] = useState("Loading...");
  const [currentPhase, setCurrentPhase] = useState("Loading...");
  const [message, setMessage] = useState("");
  const [fact, setFact] = useState("Loading fun fact...");
  const [username, setUsername] = useState("User");
  const navigate = useNavigate();

  const menstrualFacts = useMemo(() => [
    "Did you know? The average menstrual cycle lasts around 28 days, but it can vary from 21 to 35 days.",
    "Staying hydrated can help reduce bloating during your period!",
    "Regular exercise can help reduce cramps and improve mood during menstruation.",
    "Your period might be irregular for the first few years after menstruation starts.",
    "Foods rich in magnesium like dark chocolate can help reduce cramps."
  ], []);

  const phaseDescriptions = {
    "menstrual phase": "Rest and relaxation can help manage cramps and fatigue.",
    "follicular phase": "Energy levels may be rising. It's a great time for creativity and productivity!",
    "ovulation phase": "You might feel more social and confident during this phase.",
    "luteal phase": "Mood swings or cravings might occur. Self-care can help!",
    "cycle ended": "Cycle has ended. Track your next cycle to stay prepared."
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (!token) {
      setMessage("Please login to view your cycle data.");
      navigate("/");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cycles/cycle-data", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch cycle data");

        const data = await response.json();
        setNextPeriod(data.nextPeriod || "Not available");

        const normalizedPhase = data.currentPhase.trim().toLowerCase();
        setCurrentPhase(normalizedPhase);

        setMessage("");
        setFact(menstrualFacts[Math.floor(Math.random() * menstrualFacts.length)]);
      } catch (error) {
        setMessage("Error fetching cycle data.");
      }
    };

    fetchData();
  }, [navigate, menstrualFacts]);

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        {message && <p>{message}</p>}
        <div className="greeting-card">
          <h2>😊 Hello, {username}!</h2>
        </div>
        <div className="phase-card">
          <h3>📅 Next Predicted Period: {nextPeriod}</h3>
          <h3>🔍 Current Phase: {currentPhase}</h3>
          <p>{phaseDescriptions[currentPhase] || "Description not available"}</p>
        </div>
        <div className="fact-card">
          <h4>💡 Fun Fact:</h4>
          <p>{fact}</p>
        </div>
      </div>
    </div>
  );
}
