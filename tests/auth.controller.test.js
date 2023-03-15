import * as authService from '../src/services/auth.service.js';
import * as authController from '../src/controllers/auth.controller.js';

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockRequest = () => {
  const req = {};
  req.body = jest.fn().mockReturnValue(req);
  req.params = jest.fn().mockReturnValue(req);
  return req;
};

describe('auth.controller', () => {
  it('should be success to login and get token', async () => {
    const token = 'somejwttoken';

    jest.spyOn(authService, 'handleLogin').mockResolvedValue({ userId: 1 });
    jest.spyOn(authService, 'generateAccessToken').mockResolvedValue(token);

    const res = mockResponse();
    const req = mockRequest();

    req.body({
      userName: 'augi',
      password: '123',
    });

    await authController.login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ result: token });
  });

  it('should be failed to login due to wrong password', async () => {
    jest.spyOn(authService, 'handleLogin').mockResolvedValue(false);

    const res = mockResponse();
    const req = mockRequest();

    req.body({
      userName: 'augi',
      password: '123',
    });

    await authController.login(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });

  it('should be able to generate token directly', async () => {
    const token = 'somejwttoken';
    jest.spyOn(authService, 'generateAccessToken').mockResolvedValue(token);

    const res = mockResponse();
    const req = mockRequest();

    await authController.generateTokenDirectly(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ result: token });
  });
});
