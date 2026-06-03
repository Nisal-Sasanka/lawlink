import db from "../config/db.js";

export const uploadComplaintDocument = async (req, res) => {
  const { complaint_id } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO complaint_documents
      (complaint_id, file_name, file_path, file_type)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [
        complaint_id,
        req.file.originalname,
        req.file.path,
        req.file.mimetype,
      ]
    );

    res.status(201).json({
      message: "Document uploaded successfully",
      document: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to upload document",
      error: error.message,
    });
  }
};