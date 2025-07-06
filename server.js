import cors from "cors";
import express from "express";
import helmet from "helmet";
import { requestLogger } from "./middleware/logger.js";
import loremRouter from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Standard middleware stack
app.use(helmet()); //For security headers
app.use(cors()); //For Cross-origin requests
app.use(express.json()); //parse JSON bodies

// Middleware
app.use(requestLogger);

// Router
app.use("/lorems", loremRouter);

// API Documentation endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Personal Finance Tracker API",
    version: "1.0.0",
    endpoints: {
      expenses: {
        "GET /api/expenses": "Get all expenses",
        "GET /api/expenses/:id": "Get expense by ID",
        "POST /api/expenses": "Create new expense",
        "PUT /api/expenses/:id": "Update expense",
        "DELETE /api/expenses/:id": "Delete expense",
      },
      categories: {
        "GET /api/categories": "Get available categories",
      },
    },
    example: {
      createExpense: {
        method: "POST",
        url: "/api/expenses",
        body: {
          amount: 25.5,
          description: "Lunch at cafe",
          category: "food",
          date: "2025-01-15",
        },
      },
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Personal Finance Tracker API running on port ${PORT}`);
  console.log(`📖 API Documentation: http://localhost:${PORT}`);
  console.log(`🎯 Ready to track expenses!`);
});

export default app;
