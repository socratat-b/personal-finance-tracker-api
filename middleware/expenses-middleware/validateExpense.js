const validateExpense = (req, res, next) => {
  const { amount, description, category_id, expense_date } = req.body;
  const convertedAmount = parseFloat(amount);
  const parsedDate = new Date(expense_date);

  if (isNaN(convertedAmount) || convertedAmount <= 0) {
    return res.status(400).send("Please provide a valid amount.");
  } else if (!description || description.length < 3) {
    return res
      .status(400)
      .send("Please provide a short description. min-char(3)");
  } else if (!category_id || category_id === "") {
    return res.status(400).send("Please provide a category.");
  } else if (isNaN(parsedDate)) {
    return res.status(400).send("Please provide a valid date.");
  }
  next();
};

export default validateExpense;
