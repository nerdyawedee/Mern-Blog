import express from 'express';
import { signup } from '../Controllers/authcontoller';

const router = express.Router();

router.post("/signup",signup);

export default authRouter;

