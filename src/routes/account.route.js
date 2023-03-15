import { Router } from 'express';
import * as accountController from '../controllers/account.controller.js';
import * as accountValidator from '../middlewares/validations/account/account.validator.js';
import { validate } from '../middlewares/validations/user/validate.js';

const router = Router();

router.get(
  '/lastLogin/:days',
  accountValidator.getLastLoginRules(),
  validate,
  accountController.getLastLoginBy,
);

router.get('/', accountController.getAll);

router.post(
  '/',
  accountValidator.createRules(),
  validate,
  accountController.createAccount,
);
router.patch(
  '/:accountId',
  accountValidator.updateRules(),
  validate,
  accountController.updateAccount,
);
router.delete(
  '/:accountId',
  accountValidator.deleteRules(),
  validate,
  accountController.deleteAccount,
);
export default router;
