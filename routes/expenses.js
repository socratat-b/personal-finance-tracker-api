import { Router } from "express";
import validateExpense from "../middleware/expenses-middleware/validateExpense.js";
import validateId from "../middleware/validateId.js";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Get all the expenses operations here later");
});

router.post("/", validateExpense, (req, res) => {
  return res.status(201).send("Create something new in this router");
});

router.put("/:id", validateId, (req, res) => {
  return res.status(200).send(`Edit success for Id": ${req.expenseId}`);
});

export default router;
