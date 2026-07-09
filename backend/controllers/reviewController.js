import db from "../config/db.js";

export const getAllReviewss = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM reviews");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get reviews",
      error: error.message,
    });
  }
};

export const createReview = async (req, res) => {
  const { user_id, lawyer_id, consultation_id, rating, comment } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO reviews
      (user_id, lawyer_id, consultation_id, rating, comment)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [user_id, lawyer_id, consultation_id, rating, comment]
    );

    res.status(201).json({
      message: "Review created successfully",
      review: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create review",
      error: error.message,
    });
  }
};