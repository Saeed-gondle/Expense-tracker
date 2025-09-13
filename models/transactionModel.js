import mongoose from 'mongoose';
const TransactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
  },
  budget: {
    type: mongoose.Schema.ObjectId,
    ref: 'Budget',
    required: true,
  },
});
TransactionSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'category',
    select: 'name type',
  }).populate({
    path: 'budget',
    select: 'title budget remainingBudget',
  });
  next();
});
// TransactionSchema.pre('save', function (next) {
//   // &&  this.category.type === 'Expense'
//   if (this.budget.remainingBudget - this.amount < 0) {
//     return next(new Error('Insufficient remaining budget'));
//   }
//   this.budget.remainingBudget -= this.amount;
//   this.budget.save();
//   next();
// });

export default mongoose.model('Transaction', TransactionSchema);
