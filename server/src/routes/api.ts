import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import privateRouter from './private';
import productRouter from './product';
import userRouter from './user';

const apiRouter = Router();

// Products
apiRouter.use('/product', productRouter);

// Users
apiRouter.use('/user', userRouter);

// Private
apiRouter.use('/private', authMiddleware, privateRouter);

export default apiRouter;
