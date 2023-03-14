import { body, param, query } from 'express-validator';
import { uniqueEmail, userExist } from './custom.validator.js';

export const createRules = () => [
  body('fullName').notEmpty().withMessage('Full Name Required'),
  body('accountNumber').notEmpty().withMessage('Account Number Required'),
  body('emailAddress')
    .isEmail()
    .withMessage('Email Address Invalid')
    .custom(uniqueEmail),
  body('registrationNumber')
    .notEmpty()
    .withMessage('Registration Number Required'),
];

export const updateRules = () => [
  param('userId')
    .notEmpty()
    .withMessage('Param User Id Required')
    .custom(userExist),
  body('fullName').optional().notEmpty().withMessage('Full Name Required'),
  body('accountNumber')
    .optional()
    .notEmpty()
    .withMessage('Account Number Required'),
  body('emailAddress')
    .optional()
    .isEmail()
    .withMessage('Email Address Invalid')
    .custom(uniqueEmail),
  body('registrationNumber')
    .optional()
    .notEmpty()
    .withMessage('Registration Number Required'),
];

export const deleteRules = () => [
  param('userId')
    .notEmpty()
    .withMessage('Param User Id Required')
    .custom(userExist),
];

export const findByField = () => [
  param('id').notEmpty().withMessage('Param User Id Required'),
];
