import db from "../config/db.js";

export const getAllComplaints = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM complaints");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Failed to get complaints", error: error.message });
  }
};

export const createComplaint = async (req, res) => {
  const { user_id, lawyer_id, title, description, category, priority } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO complaints 
      (user_id, lawyer_id, title, description, category, priority)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [user_id, lawyer_id, title, description, category, priority]
    );

    res.status(201).json({
      message: "Complaint created successfully",
      complaint: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create complaint", error: error.message });
  }
};

export const updateComplaint = async (req, res) => {
  const { id } = req.params;
  const { title, description, category, priority, status } = req.body;

  try {
    const result = await db.query(
      `UPDATE complaints
       SET title = $1,
           description = $2,
           category = $3,
           priority = $4,
           status = $5,
           updated_at = CURRENT_TIMESTAMP
       WHERE complaint_id = $6
       RETURNING *`,
      [title, description, category, priority, status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    res.json({
      message: "Complaint updated successfully",
      complaint: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update complaint",
      error: error.message,
    });
  }
};

export const deleteComplaint = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      "DELETE FROM complaints WHERE complaint_id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    res.json({
      message: "Complaint deleted successfully",
      complaint: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete complaint",
      error: error.message,
    });
  }
};