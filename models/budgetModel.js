import mongoose from 'mongoose';
let budgetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    remainingBudget: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
budgetSchema.virtual('user', {
  ref: 'User',
  foreignField: '_id',
  localField: 'user',
});
budgetSchema.pre(/^find/, function (next) {
  this.find({ user: req.user.id });
  next();
});

// budgetSchema.virtual('category', {
//   ref: 'Category',
//   foreignField: 'budget',
//   localField: '_id',
// });
export default mongoose.model('Budget', budgetSchema);
