# 🧾 Expense Tracker App

## Overview
This is a **Personal Expense Tracker** backend (Node.js + Express) plus optional frontend (EJS or React) to let users:
- Sign up and log in securely
- Add, edit, delete expenses and incomes
- Organize and view transactions by category and date
- Set monthly budgets and track spending limits
- Visualize data with charts (category spend, monthly summary)

---

## 🎯 Objectives
- Build a **secure and scalable RESTful API**
- Support **CRUD** operations for transactions
- Implement **user authentication** using JWT
- Provide optional **frontend visualization**
- Ensure clean architecture and modular code

---

## 🛠️ Technologies
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose)  
- **Auth**: JWT, bcrypt  
- **Frontend (optional)**: EJS templates or React.js + Chart.js / React-Chartjs-2  
- **Extras**: dotenv, cors, express-validator

---

## ⚙️ Functional Requirements
1. **User Registration & Login**
   - Secure password hashing; JWT for session management  
   - Optional Google OAuth login :contentReference[oaicite:2]{index=2}  

2. **Expense/Income CRUD**
   - Each user manages their own transactions  
   - Categories, descriptions, amounts, dates  

3. **Budgeting**
   - Set monthly spending limits per user  
   - Notify or show warnings if limits exceeded  

4. **Reporting & Charts**
   - Aggregate summaries by category & month  
   - Serve data endpoints for frontend charts :contentReference[oaicite:3]{index=3}  

---

## 📋 Non-Functional Requirements
- Secure password storage & validation  
- Input validation using `express-validator`  
- Error handling via centralized middleware  
- Performance: Paginate expense listings using `limit` and `skip`  
- Low latency on queries; robust error messages  
- Hostable locally or via cloud (e.g. Heroku or Vercel)

---

## 📁 Project Structure

