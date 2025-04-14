/*import React, { useState } from "react";
import "../styles/HealthTips.css";

function HealthTips() {
  const [phase, setPhase] = useState("");

  const tips = {
    Menstrual: "Stay hydrated and rest well. Eat iron-rich foods.",
    Follicular: "Increase protein intake and engage in light exercise.",
    Ovulation: "Consume omega-3s and practice relaxation techniques.",
    Luteal: "Focus on magnesium-rich foods to ease PMS symptoms."
  };

  return (
    <div className="tips-container">
      <h2>Health Tips</h2>
      <select value={phase} onChange={(e) => setPhase(e.target.value)}>
        <option value="">Select Your Phase</option>
        <option value="Menstrual">Menstrual Phase</option>
        <option value="Follicular">Follicular Phase</option>
        <option value="Ovulation">Ovulation Phase</option>
        <option value="Luteal">Luteal Phase</option>
      </select>
      <p>{tips[phase]}</p>
    </div>
  );
}

export default HealthTips;
*/


import React, { useState } from "react";
import { FaTint, FaHeartbeat, FaStar, FaLeaf } from "react-icons/fa";
import "../styles/HealthTips.css";

function HealthTips() {
  const [phase, setPhase] = useState("");

  const phaseDetails = {
    Menstrual: {
      tip: "Stay hydrated and rest well. Eat iron-rich foods.",
      foods: "Leafy greens, lentils, red meat, dark chocolate.",
      exercise: "Gentle yoga, stretching, walking.",
      icon: <FaTint size={20} color="red" />,
    },
    Follicular: {
      tip: "Increase protein intake and engage in light exercise.",
      foods: "Eggs, fish, nuts, avocados.",
      exercise: "Strength training, cardio.",
      icon: <FaHeartbeat size={20} color="purple" />,
    },
    Ovulation: {
      tip: "Consume omega-3s and practice relaxation techniques.",
      foods: "Salmon, flaxseeds, walnuts.",
      exercise: "High-intensity workouts, dancing.",
      icon: <FaStar size={20} color="gold" />,
    },
    Luteal: {
      tip: "Focus on magnesium-rich foods to ease PMS symptoms.",
      foods: "Bananas, dark chocolate, spinach.",
      exercise: "Pilates, low-impact workouts.",
      icon: <FaLeaf size={20} color="green" />,
    },
  };

  return (
    <div className="tips-container">
      <h3>Health Tips</h3>
      <select value={phase} onChange={(e) => setPhase(e.target.value)}>
        <option value="">Select Your Phase</option>
        <option value="Menstrual">Menstrual Phase</option>
        <option value="Follicular">Follicular Phase</option>
        <option value="Ovulation">Ovulation Phase</option>
        <option value="Luteal">Luteal Phase</option>
      </select>

      {phase && (
        <div className="tip-details">
          <h3>{phaseDetails[phase].icon} {phase} Phase</h3>
          <p><strong>Tip:</strong> {phaseDetails[phase].tip}</p>
          <p><strong>Recommended Foods:</strong> {phaseDetails[phase].foods}</p>
          <p><strong>Best Exercises:</strong> {phaseDetails[phase].exercise}</p>
        </div>
      )}
    </div>
  );
}

export default HealthTips;



/*
import React, { useState, useEffect } from "react";
import { FaTint, FaHeartbeat, FaStar, FaLeaf } from "react-icons/fa";
import API_BASE_URL from "../config"; // Import the API base URL
import "../styles/HealthTips.css";

function HealthTips() {
  const [phase, setPhase] = useState("");
  const [phaseDetails, setPhaseDetails] = useState({});

  useEffect(() => {
    if (phase) {
      fetch(`${API_BASE_URL}/health-tips?phase=${phase}`) // Fetch from backend
        .then((res) => res.json())
        .then((data) => {
          setPhaseDetails(data);
        })
        .catch((error) => console.error("Error fetching health tips:", error));
    }
  }, [phase]);

  // Define icons for different phases
  const phaseIcons = {
    Menstrual: <FaTint size={20} color="red" />,
    Follicular: <FaHeartbeat size={20} color="purple" />,
    Ovulation: <FaStar size={20} color="gold" />,
    Luteal: <FaLeaf size={20} color="green" />,
  };

  return (
    <div className="tips-container">
      <h2>Health Tips</h2>
      <select value={phase} onChange={(e) => setPhase(e.target.value)}>
        <option value="">Select Your Phase</option>
        <option value="Menstrual">Menstrual Phase</option>
        <option value="Follicular">Follicular Phase</option>
        <option value="Ovulation">Ovulation Phase</option>
        <option value="Luteal">Luteal Phase</option>
      </select>

      {phase && phaseDetails.tip && (
        <div className="tip-details">
          <h3>{phaseIcons[phase]} {phase} Phase</h3>
          <p><strong>Tip:</strong> {phaseDetails.tip}</p>
          <p><strong>Recommended Foods:</strong> {phaseDetails.foods}</p>
          <p><strong>Best Exercises:</strong> {phaseDetails.exercise}</p>
        </div>
      )}
    </div>
  );
}

export default HealthTips;
*/