import { body, param, query } from 'express-validator';
import {
  accountExist,
  uniqueUsername,
  uniqueUser,
} from './custom.validator.js';
import { userExist } from '../user/custom.validator.js';

export const getLastLoginRules = () => [
  param('days')
    .notEmpty()
    .withMessage('Last Login in Days Value Required')
    .isNumeric(),
];

export const createRules = () => [
  body('userName')
    .notEmpty()
    .withMessage('Username Required')
    .isLength({ min: 3, max: 32 })
    .withMessage('Use Min 3 Chars and Max 32 Chars')
    .custom(uniqueUsername),
  body('password')
    .notEmpty()
    .withMessage('Password Required')
    .isLength({ min: 8, max: 32 })
    .withMessage('Use Min 8 Chars and Max 32 Chars'),
  body('userId')
    .notEmpty()
    .withMessage('User Id Invalid')
    .custom(userExist)
    .custom(uniqueUser),
];

export const updateRules = () => [
  param('accountId')
    .notEmpty()
    .withMessage('Param Account Id Required')
    .custom(accountExist),
  body('userName')
    .optional()
    .notEmpty()
    .withMessage('Username Required')
    .isLength({ min: 3, max: 32 })
    .withMessage('Use Min 3 Chars and Max 32 Chars')
    .custom(uniqueUsername),
  body('password')
    .optional()
    .notEmpty()
    .withMessage('Password Required')
    .isLength({ min: 8, max: 32 })
    .withMessage('Use Min 8 Chars and Max 32 Chars'),
];

export const deleteRules = () => [
  param('accountId')
    .notEmpty()
    .withMessage('Param Account Id Required')
    .custom(accountExist),
];

// export const findByField = () => [
//   param('id').notEmpty().withMessage('Param User Id Required'),
// ];
