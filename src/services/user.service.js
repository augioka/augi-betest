import User from '../models/user.model.js';

const defaultProjection = { _id: 0, __v: 0 };

export const getUserBy = async (filter) => {
  return User.find(filter, defaultProjection);
};

export const getOneUserBy = async (filter) => {
  return User.findOne(filter, defaultProjection);
};

export const createUser = async (userData) => {
  return User.create(userData);
};

export const updateByUserId = async (userId, userData) => {
  return User.updateOne({ userId }, userData);
};

export const deleteByUserId = async (userId) => {
  return User.deleteOne({ userId });
};
