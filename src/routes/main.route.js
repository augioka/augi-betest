import { Router } from 'express';
import userRouter from './user.route.js';
import accountRouter from './account.route.js';
const router = Router();

router.use('/users', userRouter);
router.use('/account', accountRouter);

export default router;
