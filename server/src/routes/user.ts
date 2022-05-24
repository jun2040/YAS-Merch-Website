import { Router } from 'express';
import userSigninController from '../controllers/user/userSignin';

// Import controllers
import userSignupController from '../controllers/user/userSignup';

const userRouter = Router();

// Signup
userRouter.post('/signup', userSignupController);

// Signin
userRouter.post('/signin', userSigninController);

export default userRouter;
