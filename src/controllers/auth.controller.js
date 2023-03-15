import * as authService from '../services/auth.service.js';
export const login = async (req, res) => {
  let result = null;
  try {
    result = await authService.handleLogin(
      req.body.userName,
      req.body.password,
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong on Login' }],
    });
  }

  if (!result) {
    return res.status(400).json({
      result: [{ field: 'password', message: 'Incorrect Password' }],
    });
  }

  try {
    const token = await authService.generateAccessToken(result.accountId);
    if (!token)
      res.status(400).json({
        result: [{ field: null, message: 'Unable Generate Token' }],
      });
    return res.status(200).json({ result: token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      result: [{ field: null, message: 'Something Wrong on Login' }],
    });
  }
};
