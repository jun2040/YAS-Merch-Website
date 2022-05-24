import { NextFunction, Request, Response } from 'express';
import ProductsInstance from '../../model/productsModel';

interface RequestBody {
    productId: string;
    color: string;
    size: string;
    quantity: number;
    email: string;
}

interface Query {
    productId: string;
}

const productOrder = async (req: Request<{}, {}, {}, Query>, res: Response, next: NextFunction) => {
    console.log(req.query.productId);

    try {
    } catch (e) {
    }    
}

export default productOrder;
