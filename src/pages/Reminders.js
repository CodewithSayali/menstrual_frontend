/*import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "../styles/Reminders.css";

const socket = io("http://localhost:3000"); // ✅ Connect to backend WebSocket

function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({ date: "", time: "", note: "" });
  const [notifications, setNotifications] = useState([]); // ✅ Store real-time notifications

  useEffect(() => {
    // ✅ Listen for Reminder Notifications
    socket.on("reminderNotification", (data) => {
      setNotifications((prev) => [...prev, data.message]);
    });

    return () => {
      socket.off("reminderNotification");
    };
  }, []);*/
/*
  // ✅ Fetch Reminders from Backend
  const fetchReminders = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/reminders");
      if (response.ok) {
        const data = await response.json();
        setReminders(data);
      }
    } catch (error) {
      console.error("❌ Error fetching reminders:", error);
    }
  };
*/
/*
const fetchReminders = async () => {
  const userId = localStorage.getItem("userId");

  try {
    const response = await fetch(`http://localhost:3000/api/reminders/${userId}`);
    if (response.ok) {
      const data = await response.json();
      setReminders(data);
    }
  } catch (error) {
    console.error("❌ Error fetching reminders:", error);
  }
};

  useEffect(() => {
    fetchReminders(); // ✅ Fetch reminders on load
  }, []);

  const handleInputChange = (e) => {
    setNewReminder({ ...newReminder, [e.target.name]: e.target.value });
  };*/
/*
  const addReminder = async () => {
    if (newReminder.date && newReminder.time && newReminder.note) {
      const dateTime = `${newReminder.date}T${newReminder.time}:00`;

      const response = await fetch("http://localhost:3000/api/reminders/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dateTime, note: newReminder.note }),
      });

      if (response.ok) {
        alert("✅ Reminder added successfully!");
        setNewReminder({ date: "", time: "", note: "" });
        fetchReminders(); // ✅ Update reminders list
      }
    }
  };
*/
/*
const addReminder = async () => {
  if (newReminder.date && newReminder.time && newReminder.note) {
    const dateTime = `${newReminder.date}T${newReminder.time}:00`;

    try {
      const response = await fetch("http://localhost:3000/api/reminders/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dateTime, note: newReminder.note }),
      });

      const data = await response.json();
      console.log("🚀 Server Response:", data); // ✅ Log Response for Debugging

      if (response.ok) {
        alert("✅ Reminder added successfully!");
        setNewReminder({ date: "", time: "", note: "" });
        fetchReminders(); // ✅ Update reminders list
      } else {
        alert("❌ Failed to add reminder! Check backend logs.");
      }
    } catch (error) {
      console.error("❌ Error adding reminder:", error);
      alert("❌ Could not connect to the server.");
    }
  } else {
    alert("⚠️ Please fill in all fields!");
  }
};
*/
/*
const addReminder = async () => {
  const userId = localStorage.getItem("userId"); // Or get it from global state

  if (newReminder.date && newReminder.time && newReminder.note) {
    const dateTime = `${newReminder.date}T${newReminder.time}:00`;

    try {
      const response = await fetch("http://localhost:3000/api/reminders/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dateTime, note: newReminder.note, userId }), // Include userId
      });

      //const data = await response.json();
      const data = await response.json();
      console.log("🚀 Server Response:", data); // Keeps the log for future debugging

      if (response.ok) {
        alert("✅ Reminder added successfully!");
        setNewReminder({ date: "", time: "", note: "" });
        fetchReminders(); // Update reminders list
      } else {
        alert("❌ Failed to add reminder!");
      }
    } catch (error) {
      console.error("❌ Error adding reminder:", error);
    }
  } else {
    alert("⚠️ Please fill in all fields!");
  }
};

const deleteReminder = async (id) => {
  const userId = localStorage.getItem("userId");

  if (!window.confirm("Are you sure you want to delete this reminder?")) return;

  try {
    const response = await fetch(`http://localhost:3000/api/reminders/delete/${userId}/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    if (response.ok) {
      alert("✅ Reminder deleted successfully!");
      fetchReminders(); // Refresh the list
    } else {
      alert(`❌ Failed to delete reminder! Server says: ${data.message}`);
    }
  } catch (error) {
    console.error("❌ Error deleting reminder:", error);
  }
};
*/

/*
// ✅ Delete Reminder Function
const deleteReminder = async (id) => {
  console.log("🛠️ Attempting to delete reminder with ID:", id);

  if (!window.confirm("Are you sure you want to delete this reminder?")) return;

  try {
    const response = await fetch(`http://localhost:3000/api/reminders/delete/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log("🚀 Server Response:", data);
    alert(data.message); // ✅ Show success message

    */
    //if (response.ok) {
      //setReminders(reminders.filter((reminder) => reminder._id !== id)); // ✅ Update UI
    //}
  //} catch (error) {
    //console.error("❌ Error deleting reminder:", error);
    //alert("❌ Failed to delete reminder!");
  //}
  /*
  if (response.ok) {
    alert("✅ Reminder deleted successfully!");
    fetchReminders(); // ✅ Refresh list after deletion
  } else {
    alert(`❌ Failed to delete reminder! Server says: ${data.message}`);
  }
} catch (error) {
  console.error("❌ Error deleting reminder:", error);
  alert("❌ Could not connect to the server.");
}

};*/
/*
  return (
    <div className="reminders-container">
      <h2>📅 Reminders</h2>

      <div className="reminder-inputs">
        <input type="date" name="date" value={newReminder.date} onChange={handleInputChange} />
        <input type="time" name="time" value={newReminder.time} onChange={handleInputChange} />
        <input type="text" name="note" placeholder="Reminder note..." value={newReminder.note} onChange={handleInputChange} />
        <button onClick={addReminder}>➕ Add Reminder</button>
      </div>

      <h3>📌 Scheduled Reminders:</h3>
      <ul>
        {reminders.length > 0 ? (
          reminders.map((reminder, index) => (
            <li key={index}>
              {new Date(reminder.dateTime).toLocaleString()} - {reminder.note}
              <button onClick={() => deleteReminder(reminder._id)}>❌ Delete</button> {/* ✅ Delete Button 
            </li>
          ))
        ) : (
          <p>No reminders set.</p>
        )}
      </ul>

      <h3>🔔 Notifications:</h3>
      <ul>
        {notifications.length > 0 ? (
          notifications.map((note, index) => (
            <li key={index} className="notification">{note}</li>
          ))
        ) : (
          <p>No notifications yet.</p>
        )}
      </ul>
    </div>
  );
}

export default Reminders;
*/



/*import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "../styles/Reminders.css";

const socket = io("http://localhost:5000"); // Connect to backend WebSocket

function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({ date: "", time: "", note: "" });
  const [notifications, setNotifications] = useState([]); // Store real-time notifications

  useEffect(() => {
    // ✅ Listen for Reminder Notifications
    socket.on("reminderNotification", (data) => {
      setNotifications((prev) => [...prev, data.message]);
    });

    return () => {
      socket.off("reminderNotification");
    };
  }, []);

  const handleInputChange = (e) => {
    setNewReminder({ ...newReminder, [e.target.name]: e.target.value });
  };

  const addReminder = async () => {
    if (newReminder.date && newReminder.time && newReminder.note) {
      const dateTime = `${newReminder.date}T${newReminder.time}:00`;

      const response = await fetch("http://localhost:3000/api/reminders/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dateTime, note: newReminder.note }),
      });

      if (response.ok) {
        alert("✅ Reminder added successfully!");
        setNewReminder({ date: "", time: "", note: "" });
      }
    }
  };

  return (
    <div className="reminders-container">
      <h2>📅 Reminders</h2>

      <div className="reminder-inputs">
        <input type="date" name="date" value={newReminder.date} onChange={handleInputChange} />
        <input type="time" name="time" value={newReminder.time} onChange={handleInputChange} />
        <input type="text" name="note" placeholder="Reminder note..." value={newReminder.note} onChange={handleInputChange} />
        <button onClick={addReminder}>➕ Add Reminder</button>
      </div>

      <h3>📌 Scheduled Reminders:</h3>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>{reminder.date} at {reminder.time} - {reminder.note}</li>
        ))}
      </ul>

      <h3>🔔 Notifications:</h3>
      <ul>
        {notifications.map((note, index) => (
          <li key={index} className="notification">{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Reminders;
*/


/*import React, { useState, useEffect } from "react";
import "../styles/Reminders.css";

function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({ date: "", time: "", note: "" });

  // Load reminders from localStorage when component mounts
  useEffect(() => {
    const savedReminders = JSON.parse(localStorage.getItem("reminders")) || [];
    setReminders(savedReminders);
  }, []);

  const handleInputChange = (e) => {
    setNewReminder({ ...newReminder, [e.target.name]: e.target.value });
  };

  const addReminder = () => {
    if (newReminder.date && newReminder.time && newReminder.note) {
      const newList = [...reminders, newReminder];
      setReminders(newList);
      localStorage.setItem("reminders", JSON.stringify(newList));
      setNewReminder({ date: "", time: "", note: "" });

      showNotification(`Reminder set for ${newReminder.date} at ${newReminder.time}`);
    }
  };

  const deleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
    localStorage.setItem("reminders", JSON.stringify(updatedReminders));
  };

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

  return (
    <div className="reminders-container">
      <h2>Reminders</h2>

      <div className="reminder-inputs">
        <input type="date" name="date" value={newReminder.date} onChange={handleInputChange} />
        <input type="time" name="time" value={newReminder.time} onChange={handleInputChange} />
        <input type="text" name="note" placeholder="Reminder note..." value={newReminder.note} onChange={handleInputChange} />
        <button onClick={addReminder}>Add Reminder</button>
      </div>

      <h3>Scheduled Reminders:</h3>
      {reminders.length === 0 ? <p>No reminders set.</p> : (
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>
              {reminder.date} at {reminder.time} - {reminder.note} 
              <button onClick={() => deleteReminder(index)}>❎</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reminders;
*/




/*import React, { useState } from "react";
import "../styles/Reminders.css";

function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({ date: "", time: "", note: "" });

  const handleInputChange = (e) => {
    setNewReminder({ ...newReminder, [e.target.name]: e.target.value });
  };

  const addReminder = () => {
    if (newReminder.date && newReminder.time && newReminder.note) {
      const newList = [...reminders, newReminder];
      setReminders(newList);
      localStorage.setItem("reminders", JSON.stringify(newList));
      setNewReminder({ date: "", time: "", note: "" });
      showNotification(`Reminder set for ${newReminder.date} at ${newReminder.time}`);
    }
  };

  const deleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
    localStorage.setItem("reminders", JSON.stringify(updatedReminders));
  };

  const showNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification("Menstrual Tracker", { body: message });
    }
  };

  return (
    <div className="reminders-container">
      <h2>Reminders</h2>

      <div className="reminder-inputs">
        <input type="date" name="date" value={newReminder.date} onChange={handleInputChange} />
        <input type="time" name="time" value={newReminder.time} onChange={handleInputChange} />
        <input type="text" name="note" placeholder="Reminder note..." value={newReminder.note} onChange={handleInputChange} />
        <button onClick={addReminder}>Add Reminder</button>
      </div>

      <h3>Scheduled Reminders:</h3>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
            {reminder.date} at {reminder.time} - {reminder.note} 
            <button onClick={() => deleteReminder(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reminders;
*/




/*
import { useState } from "react";

export default function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  const addReminder = () => {
    if (newReminder.trim() !== "") {
      setReminders([...reminders, newReminder]);
      setNewReminder("");
    }
  };

  const removeReminder = (index) => {
    setReminders(reminders.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Reminders</h3>
      <input 
        type="text" 
        placeholder="Add a reminder..." 
        value={newReminder} 
        onChange={(e) => setNewReminder(e.target.value)}
      />
      <button onClick={addReminder}>Add</button>

      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
            {reminder} <button onClick={() => removeReminder(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
*/

/*
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:3000");

function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({ date: "", time: "", note: "" });
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("reminderNotification", (data) => {
      setNotifications((prev) => [...prev, data.message]);
    });
    return () => {
      socket.off("reminderNotification");
    };
  }, []);

  const fetchReminders = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const response = await fetch(`http://localhost:3000/api/reminders/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setReminders(data);
      }
    } catch (error) {
      console.error("Error fetching reminders:", error);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  const addReminder = async () => {
    const userId = localStorage.getItem("userId");
    if (newReminder.date && newReminder.time && newReminder.note) {
      const dateTime = new Date(`${newReminder.date}T${newReminder.time}`).toISOString();
      try {
        const response = await fetch("http://localhost:3000/api/reminders/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ dateTime, note: newReminder.note, userId }),
        });
        const data = await response.json();
        if (response.ok) {
          alert("Reminder added successfully!");
          setNewReminder({ date: "", time: "", note: "" });
          fetchReminders();
        } else {
          alert("Failed to add reminder! " + data.error);
        }
      } catch (error) {
        console.error("Error adding reminder:", error);
      }
    } else {
      alert("Please fill in all fields!");
    }
  };

  const deleteReminder = async (id) => {
    const userId = localStorage.getItem("userId");
    if (!window.confirm("Are you sure you want to delete this reminder?")) return;
    try {
      const response = await fetch(`http://localhost:3000/api/reminders/delete/${userId}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.ok) {
        alert("Reminder deleted!");
        fetchReminders();
      } else {
        alert("Failed to delete reminder! " + data.message);
      }
    } catch (error) {
      console.error("Error deleting reminder:", error);
    }
  };

  return (
    <div>
      <h2>Reminders</h2>
      <input type="date" name="date" value={newReminder.date} onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })} />
      <input type="time" name="time" value={newReminder.time} onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })} />
      <input type="text" name="note" value={newReminder.note} placeholder="Reminder note" onChange={(e) => setNewReminder({ ...newReminder, note: e.target.value })} />
      <button onClick={addReminder}>Add Reminder</button>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder._id}>{new Date(reminder.dateTime).toLocaleString()} - {reminder.note}
            <button onClick={() => deleteReminder(reminder._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reminders;
*/
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:3000");

function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({ date: "", time: "", note: "" });
  // eslint-disable-next-line
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("reminderNotification", (data) => {
      setNotifications((prev) => [...prev, data.message]);
    });
    return () => {
      socket.off("reminderNotification");
    };
  }, []);

  const fetchReminders = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const response = await fetch(`http://localhost:3000/api/reminders/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setReminders(data);
      }
    } catch (error) {
      console.error("Error fetching reminders:", error);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  const addReminder = async () => {
    console.log("Attempting to add a reminder...");
    const userId = localStorage.getItem("userId");
    if (newReminder.date && newReminder.time && newReminder.note) {
      const dateTime = new Date(`${newReminder.date}T${newReminder.time}`).toISOString();
      try {
        const response = await fetch("http://localhost:3000/api/reminders/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ dateTime, note: newReminder.note, userId }),
        });
        const data = await response.json();
        console.log("Response Data:", data);

        if (response.ok) {
          alert("Reminder added successfully!");
          setNewReminder({ date: "", time: "", note: "" });
          fetchReminders();
        } else {
          alert("Failed to add reminder! " + data.error);
        }
      } catch (error) {
        console.error("Error adding reminder:", error);
      }
    } else {
      alert("Please fill in all fields!");
    }
  };

  const deleteReminder = async (id) => {
    const userId = localStorage.getItem("userId");
    if (!window.confirm("Are you sure you want to delete this reminder?")) return;
    try {
      const response = await fetch(`http://localhost:3000/api/reminders/delete/${userId}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.ok) {
        alert("Reminder deleted!");
        fetchReminders();
      } else {
        alert("Failed to delete reminder! " + data.message);
      }
    } catch (error) {
      console.error("Error deleting reminder:", error);
    }
  };

  return (
    <div>
      <h3> 📅 Reminders</h3>
      <input type="date" name="date" value={newReminder.date} onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })} />
      <input type="time" name="time" value={newReminder.time} onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })} />
      <input type="text" name="note" value={newReminder.note} placeholder="Reminder note" onChange={(e) => setNewReminder({ ...newReminder, note: e.target.value })} />
      <button onClick={addReminder}> ➕ Add Reminder</button>
      <h3>📌 Scheduled Reminders:</h3>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder._id}>{new Date(reminder.dateTime).toLocaleString()} - {reminder.note}
            <button onClick={() => deleteReminder(reminder._id)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}


export default Reminders;
