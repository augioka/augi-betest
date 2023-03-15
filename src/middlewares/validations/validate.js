import { validationResult } from 'express-validator';

const formatError = ({ param, msg }) => {
  return {
    field: param,
    message: msg,
  };
};

export const validate = (req, res, next) => {
  const errors = validationResult(req).formatWith(formatError);
  if (!errors.isEmpty()) {
    return res.status(400).json({ result: errors.array() });
  }

  return next();
};
