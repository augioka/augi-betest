import * as accountServcie from '../services/account.service.js';

export const getLastLoginBy = async (req, res) => {
  try {
    const result = await accountServcie.getLastLoginTime(req.params.days);
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Getting Account' }],
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const result = await accountServcie.getAccBy();
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Getting Account' }],
    });
  }
};

export const createAccount = async (req, res) => {
  try {
    const result = await accountServcie.createAcc(req.body);
    const { _id, __v, password, ...filteredResult } = result._doc;
    return res.status(200).json({ result: filteredResult });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Creating Account' }],
    });
  }
};

export const updateAccount = async (req, res) => {
  const { __v, accountId, ...updatedData } = req.body;

  try {
    const result = await accountServcie.updateByAccId(
      req.params.accountId,
      updatedData,
    );
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Updating Account' }],
    });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const result = await accountServcie.deleteByAccId(req.params.accountId);
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Deleting Account' }],
    });
  }
};
