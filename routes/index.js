import { Router } from "express";
import categoriesRouter from "./categories.js";
import expensesRouter from "./expenses.js";
const router = Router();

router.use("/expenses", expensesRouter);
router.use("/categories", categoriesRouter);

export default router;
