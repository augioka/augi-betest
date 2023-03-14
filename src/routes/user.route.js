import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import * as userValidator from '../middlewares/user.validator.js';
import { validate } from '../middlewares/validate.js';

const router = Router();

// router.get('/', (req, res) => {
//   res.json({ data: 'hello' });
// });

router.get('/', userController.getAll);
router.post(
  '/',
  userValidator.createRules(),
  validate,
  userController.createUser,
);

export default router;
