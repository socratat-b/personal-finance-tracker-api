import { Router } from "express";
import expensesRouter from "./expenses.js";
const router = Router();

router.use("/expenses", expensesRouter);

export default router;
