import Budget from '../models/budgetModel.js';
import * as handleFactory from './handleFactory.js';
export const createOne = Model => handleFactory.createOne(Budget);
export const getOne = Model => handleFactory.getOne(Budget);
export const getAll = Model => handleFactory.getAll(Budget);
export const updateOne = Model => handleFactory.updateOne(Budget);
export const deleteOne = Model => handleFactory.deleteOne(Budget);
