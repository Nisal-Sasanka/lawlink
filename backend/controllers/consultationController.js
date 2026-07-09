import db from "../config/db.js";

export const getAllConsultations = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM consultations");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Failed to get consultations", error: error.message });
  }
};

export const createConsultation = async (req, res) => {
  const { complaint_id, lawyer_id, package_id, consultation_type, message } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO consultations 
      (complaint_id, lawyer_id, package_id, consultation_type, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [complaint_id, lawyer_id, package_id, consultation_type, message]
    );

    res.status(201).json({
      message: "Consultation created successfully",
      consultation: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create consultation", error: error.message });
  }
};