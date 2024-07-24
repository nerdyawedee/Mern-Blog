import express from 'express';
import { signup } from '../Controllers/authcontoller.js';

const router = express.Router();

router.post("/signup",signup);

export default router;

