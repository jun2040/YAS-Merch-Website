import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import config from 'config';
import { AuthPayload } from '../interfaces/User';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-auth-token');

    if (!token) return res.status(401).json({ msg: 'Authorization denied: no token' });

    try {
        const decoded = verify(token, config.get('jwtSecret'));
    
        req.user = decoded as AuthPayload;
        next();
    } catch (e) {
        return res.status(400).json({ msg: 'Authorization denied: invalid token'})
    }
}

export default authMiddleware;
