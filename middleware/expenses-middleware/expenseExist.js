import { dataStorage } from "../../utils/constants.js";

const expenseExist = (req, res, next) => {
  const { id } = req.params;

  const parsedId = parseInt(id);

  const found = dataStorage.find((expense) => expense.id === parsedId);

  if (!found) {
    return res
      .status(404)
      .json({ error: `Expense with ID ${parsedId} not found.` });
  }

  next();
};

export default expenseExist;
