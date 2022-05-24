import { NextFunction, Request, Response } from 'express';
import ProductsInstance from '../../model/productsModel';

interface RequestBody {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    stock: number;
}

const productEditController = async (req: Request<{}, {}, RequestBody>, res: Response, next: NextFunction) => {    
    const { id } = req.body
    
    try {
        const product = await ProductsInstance.findOne({ where: { id: id } });

        if (product) {
            product.set({ ...req.body });
            await product.save();
        };
    } catch (e) {
        return res.json({ msg: 'Product edit: FAIL', status: 500, route: '/edit' });
    }
}

export default productEditController;
