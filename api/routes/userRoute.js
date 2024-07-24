import express from "express";
import { test } from "../Controllers/userController.js";
const router = express.Router();
router.get("/test",test);
// router.post()

export default router;