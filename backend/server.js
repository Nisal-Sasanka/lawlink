import express from "express";
import db from "./config/db.js";

const app = express();

app.get("/users", async (req, res) => {
  const result = await db.query("SELECT * FROM users");
  res.json(result.rows);
});

app.listen(3000);