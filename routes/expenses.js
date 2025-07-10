import { Router } from "express";
import expenseExist from "../middleware/expenses-middleware/expenseExist.js";
import validateExpense from "../middleware/expenses-middleware/validateExpense.js";
import validateId from "../middleware/validateId.js";
import { dataStorage } from "../utils/constants.js";
const router = Router();
// Get all expenses
router.get("/", (req, res) => {
  return res.status(200).json(dataStorage);
});

// Getting a specific expense base on id
router.get("/:id", validateId, expenseExist, (req, res) => {
  return res
    .status(200)
    .json(dataStorage.find((expense) => expense.id === req.expenseId));
});

// Create a expense
router.post("/", validateExpense, (req, res) => {
  const id = dataStorage.length + 1;
  dataStorage.push({ id, ...req.body });
  return res.status(201).send("Expense successfully created.");
});

// Update a expenses through id
router.put("/:id", validateId, expenseExist, (req, res) => {
  const updates = req.body;

  // Update the fields directly
  Object.assign(req.expense, updates); // updates will insert/overwrite in the exisiting object req.expenses = {}

  return res.status(200).send(`Edit success for Id": ${req.expenseId}`);
});

export default router;
