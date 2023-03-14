import * as userService from '../services/user.service.js';
export const createUser = async (req, res) => {
  let userFound;
  try {
    userFound = await userService.getUserBy({
      emailAddress: req.body.emailAddress,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Getting User' }],
    });
  }

  if (userFound.length > 0) {
    return res.status(400).json({
      result: [
        { field: 'emailAddress', message: 'Email Address Already Used' },
      ],
    });
  }

  let user;
  try {
    user = await userService.createUser(req.body);
    return res.status(200).json({ result: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong Saving User' }],
    });
  }
};

export const getAll = async (req, res) => {
  let user;
  try {
    user = await userService.getUserBy();
  } catch (error) {
    res.send(error);
  }
  res.send(user);
};
