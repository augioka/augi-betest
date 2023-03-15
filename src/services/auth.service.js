import Account from '../models/account.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const handleLogin = async (userName, password) => {
  let result = null;
  try {
    result = await Account.findOne({ userName });
  } catch (error) {
    console.log(error);
    return Promise.reject('Failed Getting Account');
  }

  if (!result) {
    return false;
  }

  const compareResult = bcrypt.compareSync(password, result.password);

  if (!compareResult) {
    return false;
  }

  return result;
};

export const generateAccessToken = async (accountId) => {
  return jwt.sign(
    {
      sub: accountId,
    },
    process.env.SECRET,
    { expiresIn: '30m' },
  );
};

export const verifyAccessToken = async (token) => {
  var decoded = jwt.verify(token, process.env.SECRET);
  if (decoded) {
    return decoded;
  }
  return false;
};
