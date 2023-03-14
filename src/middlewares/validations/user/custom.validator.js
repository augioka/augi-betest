import * as userService from '../../../services/user.service.js';

export const uniqueEmail = async (emailAddress) => {
  try {
    const userFound = await userService.getOneUserBy({
      emailAddress,
    });
    if (userFound) {
      return Promise.reject('Email Address Already Used');
    }
  } catch (error) {
    console.error(error);
    return Promise.reject('Something Wrong Checking Unique Email');
  }
};

export const userExist = async (userId) => {
  try {
    const userFound = await userService.getOneUserBy({
      userId,
    });
    if (!userFound) {
      return Promise.reject('User Id Given Not Found');
    }
  } catch (error) {
    console.error(error);
    return Promise.reject('Something Wrong Checking User');
  }
};
