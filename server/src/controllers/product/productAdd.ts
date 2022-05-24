import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import ProductsInstance from '../../model/productsModel';

const productAddController = async (req: Request, res: Response, next: NextFunction) => {
    const id = uuidv4();

    console.log(req.body)

    try {
        const record = await ProductsInstance.create({ ...req.body, id });
        return res.send({ record, msg: 'Product add: SUCCESS' });
    } catch (e) {
        console.log(e)
        return res.json({ msg: 'Product add: FAIL', status: 500, route: '/add' });
    }
}

export default productAddController;
