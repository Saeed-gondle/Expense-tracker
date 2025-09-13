import express from 'express';
import 'dotenv/config';
import transcationRoute from './routes/transactionRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import budgetRoute from './routes/budgetRoute.js';
import userRoute from './routes/userRoute.js';
import globalErrorHandler from './controllers/errorController.js';
import appError from './utils/appError.js';
import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello From Express!');
});
app.use('/api/v1/transactions', transcationRoute);
app.use('/api/v1/categories', categoryRoute);
app.use('/api/v1/budget', budgetRoute);
app.use('/api/v1/users', userRoute);

app.use((req, res, next) => {
  // console.log(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
  next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
  // next(err);
});
app.use(globalErrorHandler);
export default app;
