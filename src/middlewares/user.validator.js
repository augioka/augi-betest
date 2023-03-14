import { body } from 'express-validator';

export const createRules = () => [
  body('fullName').notEmpty().withMessage('Full Name Required'),
  body('accountNumber').notEmpty().withMessage('Account Number Required'),
  body('emailAddress').isEmail().withMessage('Email Address Invalid'),
  body('registrationNumber')
    .notEmpty()
    .withMessage('Registration Number Required'),
];
