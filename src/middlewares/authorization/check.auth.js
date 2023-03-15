import { header } from 'express-validator';

import * as authService from '../../services/auth.service.js';

export const requireAuth = (req) => [
  header('Authorization').custom(verifyToken),
];

const verifyToken = async (authHeader, { req }) => {
  if (!authHeader) {
    return Promise.reject('Auth Header Not Found');
  }

  if (!authHeader.match(/^Bearer\s.+/g)) {
    return Promise.reject('Auth Header Bearer Not Found');
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return Promise.reject('Token Not Found');
  }

  try {
    const payload = await authService.verifyAccessToken(token);
    if (!payload) {
      return Promise.reject('Invalid Token');
    }
    req.headers.user = payload;
  } catch (error) {
    console.error(error);
    return Promise.reject('Something Wrong Checking Token');
  }
};
