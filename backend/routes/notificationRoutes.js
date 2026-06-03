import express from "express";
import {
  getAllNotifications,
  createNotification,
} from "../controllers/notificationController.js";

const router = express.Router();

router.get("/", getAllNotifications);
router.post("/", createNotification);

export default router;