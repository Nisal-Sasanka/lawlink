import db from "../config/db.js";

export const getAllPaymentss = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM payments");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Failed to get payments", error: error.message });
  }
};

export const createPayment = async (req, res) => {
  const { consultation_id, amount, payment_method, transaction_id, payment_status } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO payments 
      (consultation_id, amount, payment_method, transaction_id, payment_status)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [consultation_id, amount, payment_method, transaction_id, payment_status]
    );

    res.status(201).json({
      message: "Payment created successfully",
      payment: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create payment", error: error.message });
  }
};