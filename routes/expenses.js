import { Router } from "express";
import { query } from "../db/index.js";
import expenseExist from "../middleware/expenses-middleware/expenseExist.js";
import validateExpense from "../middleware/expenses-middleware/validateExpense.js";
import validateId from "../middleware/validateId.js";
import { dataStorage } from "../utils/constants.js";

const router = Router();

// Get all expenses with category names
router.get("/", async (req, res) => {
  try {
    const result = await query(`
      SELECT
        e.id,
        e.amount,
        e.description,
        c.name as category,
        e.expense_date as date,
        e.created_at as createdAt
      FROM expenses e
      JOIN categories c ON e.category_id = c.id
      ORDER BY e.created_at DESC
    `);

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
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
