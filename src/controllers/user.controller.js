import * as userService from '../services/user.service.js';

export const getUserByAccountNumber = async (req, res) => {
  try {
    const result = await userService.getUserBy({
      accountNumber: req.params.id,
    });
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Getting User' }],
    });
  }
};

export const getUserByRegistrationNumber = async (req, res) => {
  try {
    const result = await userService.getUserBy({
      registrationNumber: req.params.id,
    });
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Getting User' }],
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const result = await userService.getUserBy();
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Getting User' }],
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const result = await userService.createUser(req.body);
    const { _id, __v, ...filteredResult } = result._doc;
    return res.status(200).json({ result: filteredResult });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Creating User' }],
    });
  }
};

export const updateUser = async (req, res) => {
  const { __v, userId, ...updatedData } = req.body;

  try {
    const result = await userService.updateByUserId(
      req.params.userId,
      updatedData,
    );
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Updating User' }],
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const result = await userService.deleteByUserId(req.params.userId);
    return res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Deleting User' }],
    });
  }
};
