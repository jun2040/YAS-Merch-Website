import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { compare, genSalt, hash } from 'bcryptjs';
import config from 'config';
import jwt from 'jsonwebtoken';

import UsersInstance from '../../model/usersModel';

interface RequestBody {
    email: string;
    password: string;
}

const userSigninController = async (req: Request<{}, {}, RequestBody>, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    
    console.log(password)

    if (!email || !password) {
        return res.json({ msg: 'User add: FAIL', status: 500, route: '/user/signup' });
    }

    try {
        const user = await UsersInstance.findOne({ where: { email: email } });

        if (!user) return res.status(400).json({ msg: 'User does not exist' });

        // Validate password
        const isMatch = await compare(password, user.getDataValue('password'));

        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        // Sign JWT
        jwt.sign(
            { id: user.getDataValue('id') },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;

                return res.json({
                    token,
                    user: {
                        id: user.getDataValue('id'),
                        email: user.getDataValue('email')
                    }
                });
            }
        );
    } catch (e) {
        return res.json({ msg: 'User signup: FAIL', status: 500, route: '/user/signup' });
    }
}

export default userSigninController;
