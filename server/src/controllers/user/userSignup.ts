import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { genSalt, hash } from 'bcryptjs';
import config from 'config';
import jwt from 'jsonwebtoken';

import UsersInstance from '../../model/usersModel';

interface RequestBody {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

const userSignupController = async (req: Request<{}, {}, RequestBody>, res: Response, next: NextFunction) => {
    const { first_name, last_name, email, password } = req.body;

    if (!first_name || !last_name || !email || !password) {
        return res.json({ msg: 'User add: FAIL', status: 500, route: '/user/signup' });
    }

    try {
        const user = await UsersInstance.findOne({ where: { email: email } });

        if (user) return res.status(400).json({ msg: 'User already exists' });

        const id = uuidv4();

        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);

        const record = await UsersInstance.create({ ...req.body, id, password: hashedPassword });

        jwt.sign(
            { id: record.getDataValue('id') },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;

                return res.json({
                    token,
                    user: {
                        id: record.getDataValue('id'),
                        email: record.getDataValue('email')
                    }
                });
            }
        )

    } catch (e) {
        return res.json({ msg: 'User signup: FAIL', status: 500, route: '/user/signup' });
    }
}

export default userSignupController;
