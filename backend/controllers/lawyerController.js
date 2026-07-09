import db from "../config/db.js";

export const getAllLawyerss = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM lawyers");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Failed to get lawyers", error: error.message });
  }
};

export const updateLawyer = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    phone,
    specialization,
    experience_years,
    license_number,
    profile_description,
    status,
  } = req.body;

  try {
    const result = await db.query(
      `UPDATE lawyers
       SET name = $1,
           email = $2,
           phone = $3,
           specialization = $4,
           experience_years = $5,
           license_number = $6,
           profile_description = $7,
           status = $8
       WHERE lawyer_id = $9
       RETURNING *`,
      [
        name,
        email,
        phone,
        specialization,
        experience_years,
        license_number,
        profile_description,
        status,
        id,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Lawyer not found" });
    }

    res.json({
      message: "Lawyer updated successfully",
      lawyer: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update lawyer",
      error: error.message,
    });
  }
};

export const deleteLawyer = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      "DELETE FROM lawyers WHERE lawyer_id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Lawyer not found" });
    }

    res.json({
      message: "Lawyer deleted successfully",
      lawyer: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete lawyer",
      error: error.message,
    });
  }
};