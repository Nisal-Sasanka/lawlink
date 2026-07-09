import express from "express";
import {
  getAllConsultationss,
  createConsultation,
} from "../controllers/consultationController.js";

const router = express.Router();

router.get("/", getAllConsultations);
router.post("/", createConsultation);

export default router;