import { Router } from "express";
import validateExpense from "../middleware/expenses-middleware/validateExpense.js";
import validateId from "../middleware/validateId.js";
import { dataStorage } from "../utils/constants.js";
const router = Router();
// Get all expenses
router.get("/", (req, res) => {
  return res.status(200).json(dataStorage);
});

// Getting a specific expense base on id
router.get("/:id", (req, res) => {
  return res
    .status(200)
    .send("Grab all the data of this id in the expenes memory or db.");
});

// Create a expense
router.post("/", validateExpense, (req, res) => {
  const id = dataStorage.length + 1;
  dataStorage.push({ id, ...req.body });
  return res.status(201).send("Create something new in this router");
});

// Update a expenses through id
router.put("/:id", validateId, (req, res) => {
  return res.status(200).send(`Edit success for Id": ${req.expenseId}`);
});

export default router;
