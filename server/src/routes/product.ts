import { Router } from 'express';

// import controllers
import productAddController from '../controllers/product/productAdd';
import productEditController from '../controllers/product/productEdit';
import productGetAllController from '../controllers/product/productGet';

const productRouter = Router();

// Get all products
productRouter.get('/get', productGetAllController);

// Add products
productRouter.post('/add', productAddController);

// Edit products
productRouter.put('/edit', productEditController);

export default productRouter;
