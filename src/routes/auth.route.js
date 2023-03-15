import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import * as authController from '../controllers/auth.controller.js';
import * as authValidator from '../middlewares/validations/auth/auth.validator.js';
import { validate } from '../middlewares/validations/validate.js';

const router = Router();

router.get(
  '/login',
  authValidator.loginRules(),
  validate,
  authController.login,
);

// router.get(
//   '/accountNumber/:id',
//   userValidator.findByField(),
//   validate,
//   userController.getUserByAccountNumber,
// );
// router.get(
//   '/registrationNumber/:id',
//   userValidator.findByField(),
//   validate,
//   userController.getUserByRegistrationNumber,
// );
// router.post(
//   '/',
//   userValidator.createRules(),
//   validate,
//   userController.createUser,
// );
// router.patch(
//   '/:userId',
//   userValidator.updateRules(),
//   validate,
//   userController.updateUser,
// );
// router.delete(
//   '/:userId',
//   userValidator.deleteRules(),
//   validate,
//   userController.deleteUser,
// );

export default router;
