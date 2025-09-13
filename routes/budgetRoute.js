import express from 'express';
import appError from '../utils/appError.js';
import * as handleFactory from '../controllers/handleFactory.js';
import * as budgetFactory from '../controllers/budgetController.js';
import * as authController from '../controllers/authController.js';
import { getMe } from '../controllers/userController.js';
import Budget from '../models/budgetModel.js';
const router = express.Router();
router.use(authController.protect);
router
  .route('/')
  .get(getMe, budgetFactory.getAll(Budget))
  .post(budgetFactory.createOne(Budget));

router
  .route('/:id')
  .get(getMe, budgetFactory.getOne(Budget))
  .patch(budgetFactory.updateOne(Budget))
  .delete(budgetFactory.deleteOne(Budget));

export default router;
