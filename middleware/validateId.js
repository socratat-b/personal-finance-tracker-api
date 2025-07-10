const validateId = (req, res, next) => {
  const { id } = req.params;
  const parsedId = parseInt(id);

  if (!parsedId) {
    return res.status(400).send("There is no id detected.");
  }

  if (isNaN(parsedId) || parsedId <= 0) {
    return res.status(400).send("Invalid ID. Must be a positive number.");
  }

  req.expenseId = parsedId;

  next();
};

export default validateId;
