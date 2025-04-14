/*import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import "../styles/MoodTracker.css";

// Register all Chart.js components
Chart.register(...registerables);

function MoodTracker() {
  const [moodData, setMoodData] = useState([]);
  const [mood, setMood] = useState("");

  // Handle mood selection
  const handleMoodSubmit = () => {
    const newMoodData = [...moodData, { mood, date: new Date().toLocaleDateString() }];
    setMoodData(newMoodData);
    setMood("");
  };

  // Prepare data for graph
  const chartData = {
    labels: moodData.map(entry => entry.date),
    datasets: [
      {
        label: "Mood Trends",
        data: moodData.map(entry => (entry.mood === "Happy" ? 1 : entry.mood === "Sad" ? -1 : 0)),
        backgroundColor: ["#ff4d6d"],
      },
    ],
  };

  return (
    <div className="mood-container">
      <h2>Mood Tracker</h2>
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="">Select Mood</option>
        <option value="Happy">😊 Happy</option>
        <option value="Sad">😢 Sad</option>
        <option value="Stressed">😖 Stressed</option>
        <option value="Energetic">⚡ Energetic</option>
      </select>
      <button onClick={handleMoodSubmit}>Log Mood</button>
      <Bar data={chartData} />
    </div>
  );
}

export default MoodTracker;
*/

/*
import { useState } from "react";

const moods = ["😊", "😢", "😡", "😴", "😁"];

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div>
      <h3>How do you feel today?</h3>
      <div>
        {moods.map((mood, index) => (
          <button key={index} onClick={() => setSelectedMood(mood)}>
            {mood}
          </button>
        ))}
      </div>
      {selectedMood && <p>You selected: {selectedMood}</p>}
    </div>
  );
}
*/

/*import { useState, useEffect } from "react";
import axios from "axios"; 

const moods = ["😊", "😢", "😡", "😴", "😁"];
const userId = "123456"; // Replace with actual user ID from authentication

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);

  // Fetch mood history from MongoDB
  useEffect(() => {
    axios.get(`http://localhost:5000/moods/${userId}/history`)
      .then((response) => setMoodHistory(response.data))
      .catch((error) => console.error("Error fetching mood history:", error));
  }, []);

  // Save selected mood in MongoDB
  const handleMoodSelect = async (mood) => {
    setSelectedMood(mood);
    try {
      await axios.post("http://localhost:5000/moods/add", { userId, mood });
      setMoodHistory([...moodHistory, { date: new Date().toISOString(), mood }].slice(-7)); // Update UI
    } catch (error) {
      console.error("Error saving mood:", error);
    }
  };

  return (
    <div>
      <h3>How do you feel today?</h3>
      <div>
        {moods.map((mood, index) => (
          <button key={index} onClick={() => handleMoodSelect(mood)}>
            {mood}
          </button>
        ))}
      </div>
      {selectedMood && <p>Today's Mood: {selectedMood}</p>}

      <h3>Mood History (Last 7 Days):</h3>
      <ul>
        {moodHistory.map((entry, index) => (
          <li key={index}>
            {new Date(entry.date).toDateString()}: {entry.mood}
          </li>
        ))}
      </ul>
    </div>
  );
}
*/
/*
import { useState } from "react";

const moods = ["😊", "😢", "😡", "😴", "😁"];

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [message, setMessage] = useState("");

  const logMood = async (mood) => {
    const date = new Date().toISOString(); // Convert to a proper date format

    try {
      const response = await fetch("http://localhost:3000/moods/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Send auth token if required
        },
        body: JSON.stringify({ mood, date }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Mood logged successfully!");
      } else {
        setMessage(data.message || "Failed to log mood.");
      }
    } catch (error) {
      setMessage("Error logging mood.");
    }

    setSelectedMood(mood);
  };

  return (
    <div>
      <h3>How do you feel today?</h3>
      <div>
        {moods.map((mood, index) => (
          <button key={index} onClick={() => logMood(mood)}>
            {mood}
          </button>
        ))}
      </div>
      {selectedMood && <p>You selected: {selectedMood}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}
*/
/*
import { useState, useEffect } from "react";
import "../styles/MoodTracker.css"; // Importing the CSS file
const token = localStorage.getItem("token")|| "";
 

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😴", label: "Tired" },
  { emoji: "😟", label: "Anxious" }
];

const moodQuotes = {
  Happy: "Keep smiling! Life is beautiful. 🌞",
  Sad: "It's okay to feel sad. Better days are ahead. 🌈",
  Angry: "Take a deep breath. Calmness is power. 🌿",
  Tired: "Rest is important. Recharge and go again! 💤",
  Anxious: "You are stronger than you think. Take it one step at a time. 💙"
};

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [message, setMessage] = useState("");
  const [quote, setQuote] = useState("");
  const [journal, setJournal] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    fetchMoodHistory();
  }, []);
  console.log("🔍 Retrieved Token:", token);
  console.log("➡️ Sending Authorization Header:", `Bearer ${token}`);

  const fetchMoodHistory = async () => {
    const token = localStorage.getItem("token"); // Get the latest token
    

  if (!token) {
    console.error("❌ No token found! Please login again.");
    return;
  }
    try {
      const response = await fetch("http://localhost:3000/api/moods/history", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });
      const data = await response.json();
      if (response.ok) {
        setMoodHistory(data);
      }
    } catch (error) {
      console.error("Error fetching mood history:", error);
    }
  };

  const logMood = async (mood) => {
    console.log("Logging Mood:", mood); // Debugging Step 1
   console.log("Journal Entry:", journal);

    const date = new Date().toISOString();

    try {
      const response = await fetch("http://localhost:3000/api/moods/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ mood, date, journal })
      });

      const data = await response.json();
      console.log("Server Response:", data); 

      if (response.ok) {
        setMessage("Mood logged successfully!");
        setMoodHistory((prev) => [data.mood, ...prev]);
      } else {
        setMessage(data.message || "Failed to log mood.");
      }
    } catch (error) {
      setMessage("Error logging mood.");
    }

    setSelectedMood(mood);
    setQuote(moodQuotes[mood]);
  };

  return (
    <div className="mood-container">
      <h3>How do you feel today?</h3>
      <div className="mood-buttons">
        {moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => logMood(mood.label)}
            className={`mood-button ${selectedMood === mood.label ? "selected" : ""}`}
          >
            {mood.emoji}
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="mood-info">
          <p>You selected: <strong>{selectedMood}</strong></p>
          <p className="mood-quote">✨ {quote}</p>
          <textarea
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            placeholder="Write something about your day..."
            className="journal-input"
          />
          <br />
        
          <button onClick={() => { alert("Button Clicked!"); logMood(selectedMood); }}>
           Save Mood & Journal
</button>

          
        </div>
      )}

      {message && <p className="message">{message}</p>}

      <h4 className="history-title">Your Mood History (Last 7 Days)</h4>
      <ul className="mood-history">
        {moodHistory.length > 0 ? (
          moodHistory.map((entry, index) => (
            <li key={index} className="history-item">
              {entry.date.split("T")[0]} - {entry.mood}
            </li>
          ))
        ) : (
          <p>No mood logs found.</p>
        )}
      </ul>
    </div>
  );
}
*/
/*
import { useState, useEffect } from "react";
import "../styles/MoodTracker.css"; // Importing the CSS file

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😴", label: "Tired" },
  { emoji: "😟", label: "Anxious" }
];

const moodQuotes = {
  Happy: "Keep smiling! Life is beautiful. 🌞",
  Sad: "It's okay to feel sad. Better days are ahead. 🌈",
  Angry: "Take a deep breath. Calmness is power. 🌿",
  Tired: "Rest is important. Recharge and go again! 💤",
  Anxious: "You are stronger than you think. Take it one step at a time. 💙"
};

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [message, setMessage] = useState("");
  const [quote, setQuote] = useState("");
  const [journal, setJournal] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    fetchMoodHistory();
  }, []);

  const fetchMoodHistory = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("❌ No token found! Please login again.");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/moods/history", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });
      const data = await response.json();
      if (response.ok) {
        setMoodHistory(data);
      }
    } catch (error) {
      console.error("Error fetching mood history:", error);
    }
  };

  const logMood = async () => {
    if (!selectedMood) return;
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("❌ No token found! Please log in.");
      return;
    }
    const date = new Date().toISOString();
    try {
      const response = await fetch("http://localhost:3000/api/moods/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ mood: selectedMood, date, journal })
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Mood logged successfully!");
        setMoodHistory((prev) => [{ mood: selectedMood, date }, ...prev]);
      } else {
        setMessage(data.message || "⚠️ Failed to log mood.");
      }
    } catch (error) {
      setMessage("❌ Error logging mood.");
    }
  };

  return (
    <div className="mood-container">
      <h3>How do you feel today?</h3>
      <div className="mood-buttons">
        {moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedMood(mood.label);
              setQuote(moodQuotes[mood.label]);
            }}
            className={`mood-button ${selectedMood === mood.label ? "selected" : ""}`}
          >
            {mood.emoji}
          </button>
        ))}
      </div>

      {selectedMood && (
        <div className="mood-info">
          <p>You selected: <strong>{selectedMood}</strong></p>
          <p className="mood-quote">✨ {quote}</p>
          <textarea
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            placeholder="Write something about your day..."
            className="journal-input"
          />
          <br />
          <button onClick={logMood}>
            Save Mood & Journal
          </button>
        </div>
      )}

      {message && <p className="message">{message}</p>}

      <h4 className="history-title">Your Mood History (Last 7 Days)</h4>
      <ul className="mood-history">
        {moodHistory.length > 0 ? (
          moodHistory.map((entry, index) => (
            <li key={index} className="history-item">
              {entry.date.split("T")[0]} - {entry.mood}
            </li>
          ))
        ) : (
          <p>No mood logs found.</p>
        )}
      </ul>
    </div>
  );
}
*/


import { useState, useEffect } from "react";
import "../styles/MoodTracker.css";

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😴", label: "Tired" },
  { emoji: "😟", label: "Anxious" }
];

const moodQuotes = {
  Happy: "Keep smiling! Life is beautiful. 🌞",
  Sad: "It's okay to feel sad. Better days are ahead. 🌈",
  Angry: "Take a deep breath. Calmness is power. 🌿",
  Tired: "Rest is important. Recharge and go again! 💤",
  Anxious: "You are stronger than you think. Take it one step at a time. 💙"
};

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [message, setMessage] = useState("");
  const [quote, setQuote] = useState("");
  const [journal, setJournal] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    fetchMoodHistory();
  }, []);

  const fetchMoodHistory = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("❌ No token found! Please login.");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/moods/history", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch mood history");
      const data = await response.json();
      setMoodHistory(data);
    } catch (error) {
      setMessage("❌ Error fetching mood history.");
    }
  };

  const logMood = async () => {
    if (!selectedMood) return;
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("❌ No token found! Please log in.");
      return;
    }
    const date = new Date().toISOString();
    try {
      const response = await fetch("http://localhost:3000/api/moods/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ mood: selectedMood, date, journal })
      });
      if (!response.ok) throw new Error("Failed to log mood");
      const data = await response.json();
      setMessage("✅ Mood logged successfully!");
      //setMoodHistory((prev) => [{ mood: selectedMood, date }, ...prev]);
      setMoodHistory((prev) => [{ _id: data.mood._id, mood: selectedMood, date }, ...prev]);

    } catch (error) {
      setMessage("❌ Error logging mood.");
    }
  };
  const deleteMood = async (id) => {
    if (!id) {
      setMessage("❌ Invalid mood ID. Cannot delete.");
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("❌ No token found! Please login.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/moods/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) throw new Error("Failed to delete mood");
      setMessage("✅ Mood deleted successfully!");
      setMoodHistory((prev) => prev.filter((entry) => entry._id !== id));
    } catch (error) {
      setMessage("❌ Error deleting mood.");
    }
  };
  

  return (
    <div className="mood-container">
      <h3>How do you feel today?</h3>
      <div className="mood-buttons">
        {moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedMood(mood.label);
              setQuote(moodQuotes[mood.label]);
            }}
            className={`mood-button ${selectedMood === mood.label ? "selected" : ""}`}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      {selectedMood && (
        <div className="mood-info">
          <p>You selected: <strong>{selectedMood}</strong></p>
          <p>{quote}</p>
          <textarea
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            placeholder="Write something about your day..."
            className="journal-input"
          />
          <button onClick={logMood}>Save Mood & Journal</button>
        </div>
      )}
      {message && <p className="message">{message}</p>}
      <h4>Mood History:</h4>
      <ul>
      <ul>
  {moodHistory.map((entry, index) => (
    <li key={index} className="mood-item">
      {new Date(entry.date).toLocaleString()}: {entry.mood}
      <button 
        className="delete-button" 
        onClick={() => deleteMood(entry._id)}
      >
        🗑️ Delete
      </button>
    </li>
  ))}
</ul>

      </ul>
    </div>
  );
}
