import User from '../models/user.model.js';
import { produceMessage } from '../kafka/producer.kafka.js';
const defaultProjection = { _id: 0, __v: 0 };

export const getUserBy = async (filter) => {
  return User.find(filter, defaultProjection);
};

export const getOneUserBy = async (filter) => {
  return User.findOne(filter, defaultProjection);
};

export const createUser = async (userData) => {
  let result = null;
  try {
    result = await User.create(userData);
  } catch (error) {
    return Promise.reject(error);
  }

  if (result) {
    const { _id, __v, password, ...filteredResult } = result._doc;
    produceMessage(process.env.USER_TOPIC, {
      action: 'CREATE',
      value: filteredResult,
    });

    return result;
  }
};

export const updateByUserId = async (userId, userData) => {
  let result = null;
  try {
    result = await User.findOneAndUpdate({ userId }, userData, {
      new: true,
    }).exec();
  } catch (error) {
    return Promise.reject(error);
  }

  if (result) {
    produceMessage(process.env.USER_TOPIC, {
      action: 'UPDATE',
      value: result,
    });

    return result;
  }
};

export const deleteByUserId = async (userId) => {
  let result = null;
  try {
    result = await User.findOneAndDelete(
      { userId },
      {
        new: true,
      },
    ).exec();
  } catch (error) {
    return Promise.reject(error);
  }

  if (result) {
    produceMessage(process.env.USER_TOPIC, {
      action: 'DELETE',
      value: result,
    });

    return result;
  }
};
