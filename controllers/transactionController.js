import * as handleFactory from './handleFactory.js';
import Transaction from '../models/transactionModel.js';
import Budget from '../models/budgetModel.js';
import appError from '../utils/appError.js';
// Aggregate transaction statistics by category
export const getTransactionStats = (req, res) => {
  Transaction.aggregate([
    {
      $group: {
        _id: '$category',
        total: { $sum: '$amount' },
        count: { $sum: 1 },
      },
    },
  ])
    .then(stats => {
      res.status(200).json({
        status: 'success',
        data: {
          stats,
        },
      });
    })
    .catch(err => {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
    });
};
export const createOne = (req, res) => handleFactory.createOne(Transaction);
export const getOne = (req, res) => handleFactory.getOne(Transaction);
export const updateOne = (req, res) => handleFactory.updateOne(Transaction);
export const deleteOne = (req, res) => handleFactory.deleteOne(Transaction);
export const updateBudgetAfterTransaction = async (req, res, next) => {
  const budget = await Budget.findById(req.body.budget);
  if (!budget) {
    return next(new appError('Budget not found', 404));
  }

  if (budget.remainingBudget - req.body.amount < 0) {
    return next(new appError('Insufficient remaining budget', 400));
  }

  // 2. Create transaction
  const transaction = await Transaction.create(req.body);

  // 3. Update budget
  budget.remainingBudget -= req.body.amount;
  await budget.save();

  // 4. Send response
  res.status(201).json({
    status: 'success',
    data: { doc: transaction },
  });
};
