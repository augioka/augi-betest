import * as userService from '../src/services/user.service.js';
import * as userController from '../src/controllers/user.controller.js';

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

describe('user.controller', () => {
  it('should be able to get user by account number', async () => {
    const accountNumber = 'someaccnum123';

    jest.spyOn(userService, 'getUserBy').mockResolvedValue({ accountNumber });

    const res = mockResponse();
    const req = mockRequest();

    req.params({ id: accountNumber });

    await userController.getUserByAccountNumber(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ result: { accountNumber } });
  });

  it('should be able to get user by reqistration number', async () => {
    const registrationNumber = 'someregnum123';

    jest
      .spyOn(userService, 'getUserBy')
      .mockResolvedValue({ registrationNumber });

    const res = mockResponse();
    const req = mockRequest();

    req.params({ id: registrationNumber });

    await userController.getUserByAccountNumber(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ result: { registrationNumber } });
  });

  it('should be able to get all user', async () => {
    jest.spyOn(userService, 'getUserBy').mockResolvedValue({});

    const res = mockResponse();
    const req = mockRequest();

    await userController.getUserByAccountNumber(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('should be able to create user', async () => {
    const mockBody = {
      fullName: 'okaadiana111123',
      accountNumber: 'acc21',
      emailAddress: 'tesdt@mail.com',
      registrationNumber: 'reg21',
    };

    const mockSavedUser = {
      _id: 'mongoobjectid',
      __v: 'versonkey',
      userId: 'someuuid',
      ...mockBody,
    };

    jest
      .spyOn(userService, 'createUser')
      .mockResolvedValue({ _doc: mockSavedUser });

    const res = mockResponse();
    const req = mockRequest();

    req.body(mockBody);

    await userController.createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      result: { ...mockBody, userId: mockSavedUser.userId },
    });
  });

  it('should be able to update user', async () => {
    const mockBody = {
      fullName: 'okaadiana111123',
      accountNumber: 'acc21',
      emailAddress: 'tesdt@mail.com',
      registrationNumber: 'reg21',
    };

    const mockSavedUser = {
      userId: 'someuuid',
      ...mockBody,
    };

    jest
      .spyOn(userService, 'updateByUserId')
      .mockResolvedValue({ ...mockSavedUser });

    const res = mockResponse();
    const req = mockRequest();

    req.params({ userId: mockSavedUser.userId });
    req.body(mockBody);

    await userController.updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      result: mockSavedUser,
    });
  });

  it('should be able to delete user', async () => {
    jest
      .spyOn(userService, 'deleteByUserId')
      .mockResolvedValue({ userId: 'someuuid' });

    const res = mockResponse();
    const req = mockRequest();

    req.params({ userId: 'someuuid' });

    await userController.deleteUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      result: { userId: 'someuuid' },
    });
  });
});
