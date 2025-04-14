const cron = require("node-cron");
const Reminder = require("../models/Reminder");
const io = require("../server");

// ✅ Run Cron Job Every Minute
cron.schedule("* * * * *", async () => {
  try {
    console.log("🔎 Checking reminders...");

    const now = new Date();
    const reminders = await Reminder.find({ dateTime: { $lte: now }, notified: false });

    for (const reminder of reminders) {
      // ✅ Send Notification via WebSockets
      io.emit("reminderNotification", { 
        message: `📢 Reminder: ${reminder.note} (Scheduled at ${reminder.dateTime})` 
      });

      // ✅ Mark as Notified
      await Reminder.findByIdAndUpdate(reminder._id, { notified: true });
      console.log(`✅ Reminder sent: ${reminder.note}`);
    }
  } catch (error) {
    console.error("❌ Error checking reminders:", error);
  }
});
