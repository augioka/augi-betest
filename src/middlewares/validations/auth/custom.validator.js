import * as accountService from '../../../services/account.service.js';

export const usernameExist = async (userName) => {
  try {
    const accFound = await accountService.getOneAccBy({
      userName,
    });
    if (!accFound) {
      return Promise.reject('Username Given Not Found');
    }
  } catch (error) {
    console.error(error);
    return Promise.reject('Something Wrong Checking Username');
  }
};
