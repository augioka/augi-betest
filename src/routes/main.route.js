import { Router } from 'express';
import userRouter from './user.route.js';
import accountRouter from './account.route.js';
import authRouter from './auth.route.js';

import { validate } from '../middlewares/validations/validate.js';
import { requireAuth } from '../middlewares/authorization/check.auth.js';

const router = Router();

router.use('/users', requireAuth(), validate, userRouter);
router.use('/accounts', requireAuth(), validate, accountRouter);
router.use('/auth', authRouter);

export default router;
