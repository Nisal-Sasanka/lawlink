import expresss from "express";
import {
  getAllUsers,
  getAllLawyersAdmin,
  getAllComplaintsAdmin,
  approveLawyer,
  rejectLawyer,
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/lawyers", getAllLawyersAdmin);
router.get("/complaints", getAllComplaintsAdmin);

router.put("/lawyers/:id/approve", approveLawyer);
router.put("/lawyers/:id/reject", rejectLawyer);

export default router;