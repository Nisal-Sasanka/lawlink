import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadComplaintDocument } from "../controllers/documentController.js";

const router = express.Router();

router.post("/upload", upload.single("document"), uploadComplaintDocument);

export default router;