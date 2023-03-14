import { body } from 'express-validator';

export const createRules = () => [
  body('fullName').notEmpty(),
  body('accountNumber').notEmpty(),
  body('emailAddress').isEmail(),
  body('registrationNumber').notEmpty(),
];
