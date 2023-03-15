import { body, param, query } from 'express-validator';
import { usernameExist } from './custom.validator.js';

export const loginRules = () => [
  body('userName')
    .notEmpty()
    .withMessage('Username Required')
    .isLength({ min: 3, max: 32 })
    .withMessage('Use Min 3 Chars and Max 32 Chars')
    .custom(usernameExist),
  body('password')
    .notEmpty()
    .withMessage('Password Required')
    .isLength({ min: 8, max: 32 })
    .withMessage('Use Min 8 Chars and Max 32 Chars'),
];
