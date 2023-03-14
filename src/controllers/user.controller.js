import * as userService from '../services/user.service.js';

export const createUser = async (req, res) => {
  let user;
  try {
    user = await userService.createUser(req.body);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
  res.send(user);
};

export const getAll = async (req, res) => {
  let user;
  try {
    user = await userService.getAllUser();
  } catch (error) {
    res.send(error);
  }
  res.send(user);
};
