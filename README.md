# 💰 Expense Tracker API

A robust and secure RESTful API built with Node.js, Express, and MongoDB for tracking personal finances, managing budgets, and gaining insights into spending habits.

![Expense Tracker](https://img.shields.io/badge/Expense%20Tracker-v1.0.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-v22.17.0-green)
![Express](https://img.shields.io/badge/Express-v5.1.0-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-latest-green)

## 🚀 Features

- **User Authentication & Security**
  - Secure signup/login with JWT
  - Password reset functionality
  - Protected routes with middleware

- **Transaction Management**
  - CRUD operations for expenses and income
  - Transaction categorization
  - Budget impact tracking

- **Budget Management**
  - Create and track monthly budgets
  - Monitor remaining budget amounts
  - Budget alerts when limits are approached

- **Analytics & Reporting**
  - Transaction statistics by category
  - Time-based reporting
  - Data for visualization in frontend

- **Email Notifications**
  - Welcome emails
  - Budget alerts
  - Monthly spending summaries
  - Password reset links

## 📋 API Endpoints

### Authentication Routes

```
POST /api/v1/users/signup - Register a new user
POST /api/v1/users/login - Login and receive JWT
GET /api/v1/users/logout - Logout and clear JWT
PATCH /api/v1/users/updateMyPassword - Change password
```

### User Routes

```
PATCH /api/v1/users/updateMe - Update user profile
DELETE /api/v1/users/deleteMe - Deactivate account
GET /api/v1/users/me - Get current user details
```

### Transaction Routes

```
GET /api/v1/transactions - Get transactions stats
POST /api/v1/transactions - Create a new transaction
GET /api/v1/transactions/:id - Get a specific transaction
PATCH /api/v1/transactions/:id - Update a transaction
DELETE /api/v1/transactions/:id - Delete a transaction
```

### Budget Routes

```
GET /api/v1/budget - Get all budgets
POST /api/v1/budget - Create a new budget
GET /api/v1/budget/:id - Get a specific budget
PATCH /api/v1/budget/:id - Update a budget
DELETE /api/v1/budget/:id - Delete a budget
```

## 🛠️ Technologies Used

- **Node.js & Express.js** - Fast, unopinionated web framework
- **MongoDB & Mongoose** - NoSQL database for flexible data storage
- **JWT** - Secure authentication with JSON Web Tokens
- **bcrypt.js** - Password hashing and comparison
- **Nodemailer** - Email sending with templates
- **Pug** - Template engine for HTML emails
- **dotenv** - Environment variable management

## 💻 Installation & Setup

1. **Clone the repository**

   ```
   git clone <repository-url>
   cd expense-tracker
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Set up environment variables**

   Create a `config.env` file in the root directory with the following variables:

   ```
   NODE_ENV=development
   PORT=3000
   CONNECTION_STR=your-mongodb-connection-string

   JWT_SECRET=your-jwt-secret
   JWT_EXPIRES_IN=90d
   JWT_COOKIE_EXPIRES_IN=90

   EMAIL_HOST=smtp.mailtrap.io
   EMAIL_PORT=2525
   EMAIL_USERNAME=your-mailtrap-username
   EMAIL_PASSWORD=your-mailtrap-password
   EMAIL_FROM=your-email@example.com
   ```

4. **Start the development server**
   ```
   npm run start:dev
   ```

## 🚀 Running in Production

```
npm run start:prod
```

## 📦 Project Structure

```
expense-tracker/
├── controllers/          # Route handlers
│   ├── authController.js
│   ├── budgetController.js
│   ├── errorController.js
│   ├── handleFactory.js
│   ├── transactionController.js
│   └── userController.js
├── models/               # Data models
│   ├── budgetModel.js
│   ├── transactionModel.js
│   └── userModel.js
├── routes/               # API routes
│   ├── budgetRoute.js
│   ├── categoryRoute.js
│   ├── transactionRoute.js
│   └── userRoute.js
├── utils/                # Utilities
│   ├── apiFeatures.js
│   ├── appError.js
│   ├── catchAsync.js
│   ├── email.js
│   └── memoryDB.js
├── Views/                # Email templates
│   └── emails/
│       ├── baseEmail.pug
│       ├── budgetAlert.pug
│       ├── monthlySummary.pug
│       ├── passwordReset.pug
│       └── welcome.pug
├── app.js                # Express app setup
├── server.js             # Server entry point
└── package.json          # Project dependencies
```

## 📊 API Response Format

Successful responses follow this format:

```json
{
  "status": "success",
  "data": {
    "doc": {
      // Resource data
    }
  }
}
```

Error responses follow this format:

```json
{
  "status": "fail",
  "message": "Error message"
}
```

## 🧪 Data Models

### User Model

- name
- email
- password
- passwordConfirm
- photo
- role
- passwordResetToken
- passwordResetExpires
- passwordChangedAt
- active

### Transaction Model

- title
- amount
- date
- category (reference to Category)
- budget (reference to Budget)

### Budget Model

- title
- budget
- remainingBudget
- category (reference to Category)

## 📝 Planned Features

- Category management
- Receipt upload and OCR
- Recurring transactions
- Data export (CSV/JSON)
- Mobile-friendly frontend with charts and visualizations

## 📜 License

[MIT License](LICENSE)

## 👨‍💻 Author

Your Name - [GitHub Profile](https://github.com/yourusername)
