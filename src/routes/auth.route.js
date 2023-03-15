import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';
import * as authValidator from '../middlewares/validations/auth/auth.validator.js';
import { validate } from '../middlewares/validations/validate.js';

const router = Router();

router.post(
  '/login',
  authValidator.loginRules(),
  validate,
  authController.login,
);

router.get('/generate', authController.generateTokenDirectly);

export default router;
