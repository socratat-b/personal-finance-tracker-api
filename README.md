# 💰 Personal Finance Tracker API

A simple REST API for managing personal expenses built with Express.js. Track your spending with full CRUD operations, validation, and error handling.

## 🔧 Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **JavaScript** - Programming language
- **In-Memory Storage** - Data persistence for MVP

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/socratat-b/personal-finance-tracker-api.git
cd personal-finance-tracker-api

# Install dependencies
npm install

# Start development server
npm run dev

# API runs on http://localhost:3000
```

## 📋 API Endpoints

### Expenses

```
GET    /api/expenses        - Get all expenses
GET    /api/expenses/:id    - Get expense by ID
POST   /api/expenses        - Create new expense
PUT    /api/expenses/:id    - Update expense
DELETE /api/expenses/:id    - Delete expense
```

### Categories

```
GET    /api/categories      - Get available categories
```

### Documentation

```
GET    /                    - API documentation
```

## 📊 Usage Examples

### Create Expense

```http
POST /api/expenses
Content-Type: application/json

{
  "amount": 25.50,
  "description": "Lunch at cafe",
  "category": "food",
  "date": "2025-01-15"
}
```

### Get All Expenses

```http
GET /api/expenses
```

### Update Expense

```http
PUT /api/expenses/1
Content-Type: application/json

{
  "amount": 30.00,
  "description": "Dinner at restaurant",
  "category": "food",
  "date": "2025-01-15"
}
```

## 📁 Project Structure

```
personal-finance-tracker-api/
├── routes/           # API endpoints
├── middleware/       # Validation & error handling
├── utils/           # Constants & helpers
├── server.js        # Main application
└── README.md        # Documentation
```

## 🎯 Features

- ✅ Full CRUD operations for expenses
- ✅ Input validation and error handling
- ✅ Predefined expense categories
- ✅ Request logging
- ✅ Proper HTTP status codes
- ✅ RESTful API design

## 📝 Data Model

### Expense Object

```json
{
  "id": 1,
  "amount": 25.5,
  "description": "Lunch at cafe",
  "category": "food",
  "date": "2025-01-15",
  "createdAt": "2025-01-15T10:30:00.000Z"
}
```

### Available Categories

```
food, transport, entertainment, bills, shopping, health, other
```

## 🧪 Testing

Use Thunder Client, Postman, or curl to test the endpoints:

```bash
# Get all expenses
curl http://localhost:3000/api/expenses

# Create new expense
curl -X POST http://localhost:3000/api/expenses \
  -H "Content-Type: application/json" \
  -d '{"amount": 25.50, "description": "Coffee", "category": "food"}'
```

## 📄 License

MIT License - feel free to use for learning and projects!

---

**Built with Express.js fundamentals - CRUD operations, middleware, and validation** 🚀
