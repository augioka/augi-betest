import Account from '../models/account.model.js';
import bcrypt from 'bcrypt';

const defaultProjection = { _id: 0, __v: 0, password: 0 };

export const getAccBy = async (filter) => {
  return Account.find(filter, defaultProjection);
};

export const getOneAccBy = async (filter) => {
  return Account.findOne(filter, defaultProjection);
};

export const createAcc = async (accData) => {
  const hash = bcrypt.hashSync(
    accData.password,
    parseInt(process.env.SALT_ROUNDS),
  );

  if (!hash) {
    return Promise.reject('Hashing Password Failed');
  }

  accData.password = hash;
  return Account.create(accData);
};

export const updateByAccId = async (accountId, accData) => {
  if (accData.password) {
    const hash = bcrypt.hashSync(
      accData.password,
      parseInt(process.env.SALT_ROUNDS),
    );

    if (!hash) {
      return Promise.reject('Hashing Password Failed');
    }

    accData.password = hash;
  }

  return Account.updateOne({ accountId }, accData);
};

export const deleteByAccId = async (accountId) => {
  return Account.deleteOne({ accountId });
};

export const getLastLoginTime = async (days) => {
  let lastLoginOption = new Date();
  lastLoginOption.setDate(lastLoginOption.getDate() - days);

  return Account.find(
    { lastLoginDateTime: { $gt: lastLoginOption } },
    defaultProjection,
  );
};
