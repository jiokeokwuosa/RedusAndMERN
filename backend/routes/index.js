import { Router } from 'express';
import userRouter from './users.route';
import exerciseRouter from './exercises.route';
import authRouter from './auth.route';

const router = Router();

router.use('/users', userRouter);
router.use('/exercises', exerciseRouter);
router.use('/auth', authRouter);


export default router;