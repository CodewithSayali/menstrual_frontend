/*import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Tracker.css";
import Reports from "./Reports";
import { saveAs } from "file-saver"; 

function Tracker() {
  const [date, setDate] = useState(new Date());
  const [periodDates, setPeriodDates] = useState([]);

  // Load stored period dates
  useEffect(() => {
    const savedDates = JSON.parse(localStorage.getItem("periodDates"));
    if (savedDates) {
      setPeriodDates(savedDates);
    }
  }, []);

  // Handle date selection
  const handleDateChange = (selectedDate) => {
    const formattedDate = selectedDate.toDateString();
    if (!periodDates.includes(formattedDate)) {
      const newDates = [...periodDates, formattedDate].sort((a, b) => new Date(a) - new Date(b));
      setPeriodDates(newDates);
      localStorage.setItem("periodDates", JSON.stringify(newDates));
      setDate(selectedDate);
      showNotification("Period date logged!");
    }
  };

  // Delete period log
  const deleteLog = (dateToDelete) => {
    const updatedDates = periodDates.filter((d) => d !== dateToDelete);
    setPeriodDates(updatedDates);
    localStorage.setItem("periodDates", JSON.stringify(updatedDates));
  };

  // Predict next period (assuming 28-day cycle)
  const predictNextPeriod = () => {
    if (periodDates.length > 0) {
      let lastPeriod = new Date(periodDates[periodDates.length - 1]);
      let nextPeriod = new Date(lastPeriod);
      nextPeriod.setDate(nextPeriod.getDate() + 28);
      return nextPeriod.toDateString();
    }
    return "Not enough data to predict.";
  };

  // Calculate cycle lengths
  const cycleLengths = periodDates.map((date, i) => 
    i > 0 ? (new Date(date) - new Date(periodDates[i - 1])) / (1000 * 60 * 60 * 24) : null
  ).filter(length => length !== null);

  // Calculate average cycle length
  const avgCycleLength = cycleLengths.length > 0 ? 
    (cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length).toFixed(1) 
    : "Not enough data";

  // Show browser notification
  const showNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification("Menstrual Tracker", { body: message });
    }
  };

  // Export cycle data as CSV
  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8,Date\n" + periodDates.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "cycle_history.csv");
  };

  return (
    <div className="tracker-container">
      <h2>Menstrual Cycle Tracker</h2>
      <Calendar onClickDay={handleDateChange} value={date} />
      
      <h3>Logged Period Dates:</h3>
      <ul>
        {periodDates.map((d, index) => (
          <li key={index}>
            {d} 
            <button onClick={() => deleteLog(d)}>❎</button>
          </li>
        ))}
      </ul>

      <h3>Next Predicted Period: {predictNextPeriod()}</h3>
      <h3>Last Cycle Length: {cycleLengths.length > 0 ? cycleLengths[cycleLengths.length - 1] + " days" : "N/A"}</h3>
      <h3>Average Cycle Length: {avgCycleLength}</h3> 
      
      <button onClick={exportData}>📂 Export Cycle Data</button>

      
      <Reports periodDates={periodDates} />
    </div>
  );
}

export default Tracker;
*/

/*
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Tracker.css";
import Reports from "./Reports";
import { saveAs } from "file-saver"; 

function Tracker() {
  const [date, setDate] = useState(new Date());
  const [periodDates, setPeriodDates] = useState([]);
  const [cycleLength, setCycleLength] = useState(28); // Default cycle length

  // Load stored period dates and cycle length
  useEffect(() => {
    const savedDates = JSON.parse(localStorage.getItem("periodDates"));
    if (savedDates) setPeriodDates(savedDates);

    const savedCycleLength = localStorage.getItem("cycleLength");
    if (savedCycleLength) setCycleLength(Number(savedCycleLength));
  }, []);

  // Handle date selection
  const handleDateChange = (selectedDate) => {
    const formattedDate = selectedDate.toDateString();
    if (!periodDates.includes(formattedDate)) {
      const newDates = [...periodDates, formattedDate].sort((a, b) => new Date(a) - new Date(b));
      setPeriodDates(newDates);
      localStorage.setItem("periodDates", JSON.stringify(newDates));
      setDate(selectedDate);
      showNotification("Period date logged!");
    }
  };

  // Delete period log
  const deleteLog = (dateToDelete) => {
    const updatedDates = periodDates.filter((d) => d !== dateToDelete);
    setPeriodDates(updatedDates);
    localStorage.setItem("periodDates", JSON.stringify(updatedDates));
  };

  // Calculate cycle lengths
  const cycleLengths = periodDates.map((date, i) => 
    i > 0 ? (new Date(date) - new Date(periodDates[i - 1])) / (1000 * 60 * 60 * 24) : null
  ).filter(length => length !== null);

  // Calculate average cycle length
  const avgCycleLength = cycleLengths.length > 0 ? 
    Math.round(cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length) 
    : 28; // Default to 28 if not enough data

  // Predict next period based on user's actual cycle length or selected cycle length
  const predictNextPeriod = () => {
    if (periodDates.length > 0) {
      let lastPeriod = new Date(periodDates[periodDates.length - 1]);
      let nextPeriod = new Date(lastPeriod);
      nextPeriod.setDate(nextPeriod.getDate() + cycleLength); // Use user-defined cycle length
      return nextPeriod.toDateString();
    }
    return "Not enough data to predict.";
  };

  // Show browser notification
  const showNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification("Menstrual Tracker", { body: message });
    }
  };

  // Handle cycle length change
  const handleCycleLengthChange = (e) => {
    const value = Number(e.target.value);
    if (value > 15 && value < 50) { // Ensure valid range
      setCycleLength(value);
      localStorage.setItem("cycleLength", value);
    }
  };

  // Export cycle data as CSV
  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8,Date\n" + periodDates.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "cycle_history.csv");
  };

  return (
    <div className="tracker-container">
      <h2>Menstrual Cycle Tracker</h2>
      <Calendar onClickDay={handleDateChange} value={date} />
      
      <h3>Logged Period Dates:</h3>
      <ul>
        {periodDates.map((d, index) => (
          <li key={index}>
            {d} 
            <button onClick={() => deleteLog(d)}>❎</button>
          </li>
        ))}
      </ul>


      {/*Allow user to manually set cycle length 
      <label>Set Your Cycle Length: </label>
      <input 
        type="number" 
        value={cycleLength} 
        onChange={handleCycleLengthChange} 
        min="15" 
        max="50"
      />

      

      <h3>Next Predicted Period: {predictNextPeriod()}</h3>
      <h3>Last Cycle Length: {cycleLengths.length > 0 ? cycleLengths[cycleLengths.length - 1] + " days" : "N/A"}</h3>
      <h3>Average Cycle Length: {avgCycleLength} days</h3>

      

      <button onClick={exportData}>📂 Export Cycle Data</button>

      {/* Integrating Reports 
      <Reports periodDates={periodDates} />
    </div>
  );
}

export default Tracker;
*/
/*
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Tracker.css";
import Reports from "./Reports";
import { saveAs } from "file-saver";

function Tracker() {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(new Date());
  const [periodRecords, setPeriodRecords] = useState([]);
  const [cycleLength, setCycleLength] = useState(28); // Default cycle length
  const [message, setMessage] = useState("");

  // Load stored period dates and cycle length
  useEffect(() => {
    const fetchPeriodRecords = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cycles/history", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setPeriodRecords(data);
          if (data.length > 0) {
            setCycleLength(data[0].cycleLength);
          }
        } else {
          setMessage("Failed to fetch period records.");
        }
      } catch (error) {
        setMessage("Error fetching period records.");
      }
    };

    fetchPeriodRecords();
  }, []);

  // Handle date selection
  const handleDateChange = async (selectedDate) => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    if (!periodRecords.some((record) => record.startDate === formattedDate)) {
      try {
        const response = await fetch("http://localhost:3000/api/cycles/log", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ startDate: formattedDate, cycleLength }),
        });

        if (response.ok) {
          const newRecord = await response.json();
          setPeriodRecords((prevRecords) =>
            [...prevRecords, newRecord].sort(
              (a, b) => new Date(a.startDate) - new Date(b.startDate)
            )
          );
          setMessage("Period date logged!");
        } else {
          setMessage("Failed to log period date.");
        }
      } catch (error) {
        setMessage("Error logging period date.");
      }
    }
  };

  // Delete period log
  const deleteLog = async (recordId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cycles/${recordId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        setPeriodRecords((prevRecords) =>
          prevRecords.filter((record) => record._id !== recordId)
        );
        setMessage("Period record deleted.");
      } else {
        setMessage("Failed to delete period record.");
      }
    } catch (error) {
      setMessage("Error deleting period record.");
    }
  };

  // Calculate cycle lengths
  const cycleLengths = periodRecords
    .map((record, i) =>
      i > 0
        ? (new Date(record.startDate) -
            new Date(periodRecords[i - 1].startDate)) /
          (1000 * 60 * 60 * 24)
        : null
    )
    .filter((length) => length !== null);

  const avgCycleLength =
    cycleLengths.length > 0
      ? Math.round(cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length)
      : 28;

  const predictNextPeriod = () => {
    if (periodRecords.length > 0) {
      let lastPeriod = new Date(periodRecords[periodRecords.length - 1].startDate);
      let nextPeriod = new Date(lastPeriod);
      nextPeriod.setDate(nextPeriod.getDate() + cycleLength);
      return nextPeriod.toDateString();
    }
    return "Not enough data to predict.";
  };

  // Show browser notification
  // eslint-disable-next-line no-unused-vars
  const showNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification("Menstrual Tracker", { body: message });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Menstrual Tracker", { body: message });
        }
      });
    }
  };

  // Handle cycle length change
  const handleCycleLengthChange = async (e) => {
    const value = Number(e.target.value);
    if (value > 15 && value < 50) {
      setCycleLength(value);
      try {
        const response = await fetch(
          "http://localhost:3000/api/cycles/update-cycle-length",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ cycleLength: value }),
          }
        );

        if (response.ok) {
          setMessage("Cycle length updated.");
        } else {
          setMessage("Failed to update cycle length.");
        }
      } catch (error) {
        setMessage("Error updating cycle length.");
      }
    }
  };

  // Export cycle data as CSV
  const exportData = () => {
    const periodDates = periodRecords.map((record) => record.startDate);
    const csvContent =
      "data:text/csv;charset=utf-8,Date\n" + periodDates.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "cycle_history.csv");
  };

  // Define periodDates for use in Reports component
  const periodDates = periodRecords.map((record) => record.startDate);

  return (
    <div>
      <h1>Menstrual Health Tracker</h1>
      <div>
        {/* Calendar Component 
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <div>
        {/* Cycle Length Input 
        <label>
          Cycle Length:
          <input
            type="number"
            value={cycleLength}
            onChange={handleCycleLengthChange}
            min="15"
            max="50"
          />
        </label>
      </div>
      <div>
        <h2>Period Records</h2>
        <ul>
          {periodRecords.map((record) => (
            <li key={record._id}>
              {record.startDate}
              <button onClick={() => deleteLog(record._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>

      

        {/* Additional Features 
        <h3>Next Predicted Period: {predictNextPeriod()}</h3>
        <h3>
          Last Cycle Length:{" "}
          {cycleLengths.length > 0
            ? cycleLengths[cycleLengths.length - 1] + " days"
            : "N/A"}
        </h3>
        <h3>Average Cycle Length: {avgCycleLength} days</h3>
        <button onClick={exportData}>📂 Export Cycle Data</button>
      </div>
      {/* Reports Component 
      <Reports periodDates={periodDates} />
      {/* Message Display 
      {message && <p>{message}</p>}
    </div>
  );
}

export default Tracker;
*/
/*
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Tracker.css";
import Reports from "./Reports";
import { saveAs } from "file-saver";

function Tracker() {
  
  const [date, setDate] = useState(new Date());
  const [periodDates, setPeriodDates] = useState([]);
  const [cycleLength, setCycleLength] = useState(28); // Default cycle length

  const API_URL = "http://localhost:3000/api/cycle"; // Backend API URL

  // 📌 Fetch stored period data from the backend
  useEffect(() => {
    const fetchPeriodData = async () => {
      try {
        const response = await fetch(`${API_URL}/history`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // If using authentication
          },
        });
        const data = await response.json();
        setPeriodDates(data.periods || []);
        setCycleLength(data.cycleLength || 28);
      } catch (error) {
        console.error("Error fetching period history:", error);
        setPeriodDates([]);
      }
    };

    fetchPeriodData();
  }, []);

  // 📌 Handle date selection and log to database
  const handleDateChange = async (selectedDate) => {console.log("Calendar clicked! Selected Date:", selectedDate);

    const formattedDate = selectedDate.toISOString();
    console.log("📝 ISO Formatted Date:", formattedDate);

    if (!periodDates.includes(formattedDate)) {
      console.log("🆕 New period date detected. Sending request...");
      try {
        const response = await fetch(`${API_URL}/log`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ startDate: formattedDate, cycleLength }),
        });

        console.log("🔍 Response Status:", response.status);
        const result = await response.json();
        console.log("📥 Response Data:", result);
        setPeriodDates(result.periods);
        setDate(selectedDate);
        showNotification("Period date logged!");

        if (response.ok) {
          setPeriodDates(result.periods);
          setDate(selectedDate);
          showNotification("Period date logged!");
        } else {
          console.error("❌ Error response from server:", result);
        }
      } catch (error) {
        console.error("Error logging period:", error);
      }
      

      
    }
  };

  // 📌 Delete period log from backend
  const deleteLog = async (dateToDelete) => {
    try {
      const response = await fetch(`${API_URL}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ date: dateToDelete }),
      });

      const result = await response.json();
      setPeriodDates(result.periods);
    } catch (error) {
      console.error("Error deleting period log:", error);
    }
  };

  // 📌 Calculate cycle lengths
  const cycleLengths = periodDates
    .map((date, i) =>
      i > 0 ? (new Date(date) - new Date(periodDates[i - 1])) / (1000 * 60 * 60 * 24) : null
    )
    .filter((length) => length !== null);

  // 📌 Calculate average cycle length
  const avgCycleLength =
    cycleLengths.length > 0
      ? Math.round(cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length)
      : 28; // Default to 28 if not enough data

  // 📌 Predict next period based on last cycle length
  const predictNextPeriod = () => {
    if (periodDates.length > 0) {
      let lastPeriod = new Date(periodDates[periodDates.length - 1]);
      let nextPeriod = new Date(lastPeriod);
      nextPeriod.setDate(nextPeriod.getDate() + cycleLength);
      return nextPeriod.toDateString();
    }
    return "Not enough data to predict.";
  };

  // 📌 Show browser notification
  const showNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification("Menstrual Tracker", { body: message });
    }
  };

  // 📌 Update cycle length in backend
  const handleCycleLengthChange = async (e) => {
    const value = Number(e.target.value);
    if (value > 15 && value < 50) {
      try {
        const response = await fetch(`${API_URL}/update-cycle-length`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ cycleLength: value }),
        });

        const result = await response.json();
        setCycleLength(result.cycleLength);
      } catch (error) {
        console.error("Error updating cycle length:", error);
      }
    }
  };

  // 📌 Export cycle data as CSV
  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8,Date\n" + periodDates.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "cycle_history.csv");
  };

  return (
    <div className="tracker-container">
      <h2>Menstrual Cycle Tracker</h2>
      <Calendar onClickDay={handleDateChange} value={date} />

      <h3>Logged Period Dates:</h3>
      <ul>
        {periodDates.map((d, index) => (
          <li key={index}>
            {d} <button onClick={() => deleteLog(d)}>❎</button>
          </li>
        ))}
      </ul>

      {/* Allow user to manually set cycle length 
      <label>Set Your Cycle Length: </label>
      <input
        type="number"
        value={cycleLength}
        onChange={handleCycleLengthChange}
        min="15"
        max="50"
      />

      <h3>Next Predicted Period: {predictNextPeriod()}</h3>
      <h3>Last Cycle Length: {cycleLengths.length > 0 ? cycleLengths[cycleLengths.length - 1] + " days" : "N/A"}</h3>
      <h3>Average Cycle Length: {avgCycleLength} days</h3>

      <button onClick={exportData}>📂 Export Cycle Data</button>

      {/* Integrating Reports 
      <Reports periodDates={periodDates} />
    </div>
    
  );
}

export default Tracker;
*/

/*
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Tracker.css";
import Reports from "./Reports";
import { saveAs } from "file-saver";

function Tracker() {
  const [date, setDate] = useState(new Date());
  const [periodDates, setPeriodDates] = useState([]);
  const [cycleLength, setCycleLength] = useState(28); // Default cycle length

  // Load stored period dates and cycle length
  const fetchCycleData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/cycle", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      const data = await response.json();
      console.log("Response Data:", data);
  
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch data");
      }
  
      setPeriodDates(data.periods || []);
    } catch (error) {
      console.error("Error Fetching Data:", error);
      alert("Error fetching data."); // Debugging alert
    }
  };
  

  /*useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cycle/history", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setPeriodDates(data.periods);
        setCycleLength(data.cycleLength);
      } catch (error) {
        console.error(error);
        alert("Error fetching data.");
      }
    };

    fetchData();
  }, []);
  */
 
  // Handle date selection
  /*
  const handleDateChange = async (selectedDate) => {
    setDate(selectedDate); 
    const formattedDate = selectedDate.toISOString().split("T")[0]; // Convert date to "YYYY-MM-DD" format

    if (!periodDates.includes(formattedDate)) {
      try {
        const response = await fetch("http://localhost:3000/api/cycle/log", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure the user is authenticated
          },
          body: JSON.stringify({ startDate: formattedDate, cycleLength }),
        });

        if (!response.ok) throw new Error("Failed to log period date");

        const data = await response.json();
        setPeriodDates(data.periods); // Update frontend with data from backend
        showNotification("Period date logged!");
      } catch (error) {
        console.error(error);
        alert("Error logging period.");
      }
    }
  };

  // Delete period log
  const deleteLog = async (dateToDelete) => {
    try {
      const response = await fetch("http://localhost:3000/api/cycle/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ date: dateToDelete }),
      });

      if (!response.ok) throw new Error("Failed to delete period log");

      const data = await response.json();
      setPeriodDates(data.periods); // Update frontend with new data
    } catch (error) {
      console.error(error);
      alert("Error deleting period log.");
    }
  };

  // Calculate cycle lengths
  const cycleLengths = periodDates
    .map((date, i) =>
      i > 0 ? (new Date(date) - new Date(periodDates[i - 1])) / (1000 * 60 * 60 * 24) : null
    )
    .filter((length) => length !== null);

  // Calculate average cycle length
  const avgCycleLength =
    cycleLengths.length > 0
      ? Math.round(cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length)
      : 28; // Default to 28 if not enough data

  // Predict next period based on user's actual cycle length or selected cycle length
  const predictNextPeriod = () => {
    if (periodDates.length > 0) {
      let lastPeriod = new Date(periodDates[periodDates.length - 1]);
      let nextPeriod = new Date(lastPeriod);
      nextPeriod.setDate(nextPeriod.getDate() + cycleLength); // Use user-defined cycle length
      return nextPeriod.toDateString();
    }
    return "Not enough data to predict.";
  };

  // Show browser notification
  /*const showNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification("Menstrual Tracker", { body: message });
    }
  };
  const showNotification = (message) => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Menstrual Tracker", { body: message });
        }
      });
    } else {
      new Notification("Menstrual Tracker", { body: message });
    }
  };
  

  // Handle cycle length change
  const handleCycleLengthChange = async (e) => {
    const value = Number(e.target.value);
    if (value < 15 || value > 50) return;

    setCycleLength(value);

    try {
      const response = await fetch("http://localhost:3000/api/cycle/update-cycle-length", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ cycleLength: value }),
      });

      if (!response.ok) throw new Error("Failed to update cycle length");
    } catch (error) {
      console.error(error);
      alert("Error updating cycle length.");
    }
  };

  // Export cycle data as CSV
  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8,Date\n" + periodDates.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "cycle_history.csv");

    if (periodDates.length === 0) {
      alert("No data to export!");
      return;
    }

  };

  return (
    <div className="tracker-container">
      <h2>Menstrual Cycle Tracker</h2>
      <Calendar onClickDay={handleDateChange} value={date} />

      <h3>Logged Period Dates:</h3>
      <ul>
        {periodDates.map((d, index) => (
          <li key={index}>
            {d} <button onClick={() => deleteLog(d)}>❎</button>
          </li>
        ))}
      </ul>

      <label>Set Your Cycle Length: </label>
      <input
        type="number"
        value={cycleLength}
        onChange={handleCycleLengthChange}
        min="15"
        max="50"
      />

      <h3>Next Predicted Period: {predictNextPeriod()}</h3>
      <h3>Last Cycle Length: {cycleLengths.length > 0 ? cycleLengths[cycleLengths.length - 1] + " days" : "N/A"}</h3>
      <h3>Average Cycle Length: {avgCycleLength} days</h3>

      <button onClick={exportData}>📂 Export Cycle Data</button>

      <Reports periodDates={periodDates} />
    </div>
  );
}

export default Tracker;
*/
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Tracker.css";
import Reports from "./Reports";
import { saveAs } from "file-saver";

function Tracker() {
  //const [date, setDate] = useState(new Date());
  const [periodDates, setPeriodDates] = useState([]);
  const [cycleLength, setCycleLength] = useState(28); // Default cycle length

  // Fetch period history from backend
  console.log("Sending Token:", localStorage.getItem("token"));

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cycles", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,// Add token if using authentication
          },
        });

        const contentType = response.headers.get("content-type");
        if (!response.ok || !contentType || !contentType.includes("application/json")) {
          throw new Error("Unexpected response format. Possibly unauthorized.");
        }
        //if (!response.ok) throw new Error("Failed to fetch data");
        if (!response.ok) {
          const errorData = await response.json();
          console.error("API Error:", errorData.message);
          throw new Error("Failed to log period");
        }

        const data = await response.json();
        if (data.periods) setPeriodDates(data.periods);
        if (data.cycleLength) setCycleLength(data.cycleLength);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); 
  }, []);

  console.log("Sending Token:", localStorage.getItem("token"));

  // Handle date selection and log the period
  const handleDateChange = async (selectedDate) => {
    const formattedDate = selectedDate.toISOString();
    try {
      const response = await fetch("http://localhost:3000/api/cycles/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ startDate: formattedDate, cycleLength }),
      });

      //if (!response.ok) throw new Error("Failed to log period");
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData.message);
        throw new Error("Failed to log period");
      }

      const data = await response.json();
      setPeriodDates(data.periods);
      showNotification("Period date logged!");
    } catch (error) {
      console.error("Error logging period:", error);
    }
  };

  // Delete period log
  console.log("Sending Token:", localStorage.getItem("token"));
  const deleteLog = async (dateToDelete) => {
    try {
      const response = await fetch("http://localhost:3000/api/cycles/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ date: dateToDelete }),
      });

      if (!response.ok) throw new Error("Failed to delete period log");

      const data = await response.json();
      setPeriodDates(data.periods);
    } catch (error) {
      console.error("Error deleting log:", error);
    }
  };

  // Update cycle length
  const handleCycleLengthChange = async (e) => {
    const value = Number(e.target.value);
    if (value > 15 && value < 50) {
      try {
        const response = await fetch("http://localhost:3000/api/cycles/update-cycle-length", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ cycleLength: value }),
        });

        if (!response.ok) throw new Error("Failed to update cycle length");

        const data = await response.json();
        setCycleLength(data.cycleLength);
      } catch (error) {
        console.error("Error updating cycle length:", error);
      }
    }
  };
  // Calculate cycle lengths
  const cycleLengths = periodDates.map((date, i) => 
    i > 0 ? (new Date(date) - new Date(periodDates[i - 1])) / (1000 * 60 * 60 * 24) : null
  ).filter(length => length !== null);

  // Calculate average cycle length
  const avgCycleLength = cycleLengths.length > 0 ? 
    Math.round(cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length) 
    : 28; // Default to 28 if not enough data

  // Predict next period based on user's actual cycle length or selected cycle length
  const predictNextPeriod = () => {
    if (periodDates.length > 0) {
      let lastPeriod = new Date(periodDates[periodDates.length - 1]);
      let nextPeriod = new Date(lastPeriod);
      nextPeriod.setDate(nextPeriod.getDate() + cycleLength); // Use user-defined cycle length
      return nextPeriod.toDateString();
    }
    return "Not enough data to predict.";
  };

  // Show browser notification
  const showNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification("Menstrual Tracker", { body: message });
    }
  };

  // Export cycle data as CSV
  const exportData = () => {
    const csvContent = "Date\n" + periodDates.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "cycle_history.csv");
  };

  return (
    <div className="tracker-container">
      <h2>Menstrual Cycle Tracker</h2>
      <Calendar onClickDay={handleDateChange} value={new Date()} />

      <h3>Logged Period Dates:</h3>
      <ul>
        {periodDates.map((d, index) => (
          <li key={index}>
            {new Date(d).toDateString()}
            <button onClick={() => deleteLog(new Date(d).toISOString())}>❎</button>
          </li>
        ))}
      </ul>

      <label>Set Your Cycle Length: </label>
      <input
        type="number"
        value={cycleLength}
        onChange={handleCycleLengthChange}
        min="15"
        max="50"
      />
      <h3>Next Predicted Period: {predictNextPeriod()}</h3>
      <h3>Last Cycle Length: {cycleLengths.length > 0 ? cycleLengths[cycleLengths.length - 1] + " days" : "N/A"}</h3>
      <h3>Average Cycle Length: {avgCycleLength} days</h3>


      <button onClick={exportData}>📂 Export Cycle Data</button>

      {/* Integrating Reports */}
      <Reports periodDates={periodDates} />
    </div>
  );
}

export default Tracker;
