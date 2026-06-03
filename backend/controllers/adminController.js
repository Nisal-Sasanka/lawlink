import db from "../config/db.js";

export const getAllUsers = async (req, res) => {
  const result = await db.query("SELECT * FROM users");
  res.json(result.rows);
};

export const getAllLawyersAdmin = async (req, res) => {
  const result = await db.query("SELECT * FROM lawyers");
  res.json(result.rows);
};

export const getAllComplaintsAdmin = async (req, res) => {
  const result = await db.query("SELECT * FROM complaints");
  res.json(result.rows);
};

export const approveLawyer = async (req, res) => {
  const { id } = req.params;

  const result = await db.query(
    "UPDATE lawyers SET status = 'approved' WHERE lawyer_id = $1 RETURNING *",
    [id]
  );

  res.json({
    message: "Lawyer approved successfully",
    lawyer: result.rows[0],
  });
};

export const rejectLawyer = async (req, res) => {
  const { id } = req.params;

  const result = await db.query(
    "UPDATE lawyers SET status = 'rejected' WHERE lawyer_id = $1 RETURNING *",
    [id]
  );

  res.json({
    message: "Lawyer rejected successfully",
    lawyer: result.rows[0],
  });
};