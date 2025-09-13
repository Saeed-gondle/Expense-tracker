import express from 'express';
import appError from '../utils/appError.js';
import * as transactionController from '../controllers/transactionController.js';
import * as authController from '../controllers/authController.js';
const router = express.Router();
router.use(authController.protect);
router
  .route('/')
  .get(transactionController.getTransactionStats)
  .post(transactionController.updateBudgetAfterTransaction, transactionController.createOne);
router
  .route('/:id')
  .get(transactionController.getOne)
  .patch(transactionController.updateOne)
  .delete(transactionController.deleteOne);
export default router;
