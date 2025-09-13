import User from '../models/userModel.js';
import * as handleFactory from './handleFactory.js';
export const getMe = (req, res, next) => {
  req.params.id = req.user.id; // Overwrite the ID to the current user
  next();
};
export const getUser = handleFactory.getOne(User);
export const updateMe = handleFactory.updateOne(User);
export const deleteMe = handleFactory.deleteOne(User);
