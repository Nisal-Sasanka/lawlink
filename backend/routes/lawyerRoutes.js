import express from "express";
import {
  getAllLawyers,
  updateLawyer,
  deleteLawyer,
} from "../controllers/lawyerController.js";

const router = express.Router();

router.get("/", getAllLawyers);
router.put("/:id", updateLawyer);
router.delete("/:id", deleteLawyer);

export default router;