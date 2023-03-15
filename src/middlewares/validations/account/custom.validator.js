import * as accountService from '../../../services/account.service.js';

export const accountExist = async (accountId) => {
  try {
    const accFound = await accountService.getOneAccBy({
      accountId,
    });
    if (!accFound) {
      return Promise.reject('Account Id Given Not Found');
    }
  } catch (error) {
    console.error(error);
    return Promise.reject('Something Wrong Checking Account');
  }
};

export const uniqueUsername = async (userName) => {
  try {
    const accFound = await accountService.getOneAccBy({
      userName,
    });
    if (accFound) {
      return Promise.reject('Username Already Used');
    }
  } catch (error) {
    console.error(error);
    return Promise.reject('Something Wrong Checking Unique Username');
  }
};

export const uniqueUser = async (userId) => {
  try {
    const accFound = await accountService.getOneAccBy({
      userId,
    });
    if (accFound) {
      return Promise.reject('User Already Have an Account');
    }
  } catch (error) {
    console.error(error);
    return Promise.reject('Something Wrong Checking Unique User');
  }
};
