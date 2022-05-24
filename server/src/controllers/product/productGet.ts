import { NextFunction, Request, Response } from 'express';
import ProductsInstance from '../../model/productsModel';

interface Query {
    productId: string;
}

const productGetAllController = async (req: Request<{}, {}, {}, Query>, res: Response, next: NextFunction) => {
    console.log(req.query.productId);

    try {
        const record = req.query.productId 
            ? await ProductsInstance.findOne({ where: { id: req.query.productId } }) 
            : await ProductsInstance.findAll({ where: {} });
        return res.json(record);
    } catch (e) {
        return res.json({ msg: 'Products fetch: FAIL', status: 500, route: '/get' });
    }    
}

export default productGetAllController;
