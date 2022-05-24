import { Router } from 'express';

// Import controllers

const privateRouter = Router();

privateRouter.get('/', (req, res, next) => {
    res.json({ msg: 'This is a private route' });
});

export default privateRouter;
