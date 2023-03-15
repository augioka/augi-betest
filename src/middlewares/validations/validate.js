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
    if (errors.mapped().authorization) {
      res.status(401);
    } else {
      res.status(400);
    }
    return res.json({ result: errors.array() });
  }

  return next();
};
