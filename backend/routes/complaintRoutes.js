import express from "express";
import {
  getAllComplaints,
  createComplaint,
  updateComplaint,
  deleteComplaint,
} from "../controllers/complaintController.js";

const router = express.Router();

router.get("/", getAllComplaints);
router.post("/", createComplaint);
router.put("/:id", updateComplaint);
router.delete("/:id", deleteComplaint);

export default router;