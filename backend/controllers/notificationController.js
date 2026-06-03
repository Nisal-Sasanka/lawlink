import db from "../config/db.js";

export const getAllNotifications = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM notifications");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Failed to get notifications", error: error.message });
  }
};

export const createNotification = async (req, res) => {
  const { user_id, message, type, status } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO notifications 
      (user_id, message, type, status)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [user_id, message, type, status]
    );

    res.status(201).json({
      message: "Notification created successfully",
      notification: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create notification", error: error.message });
  }
};