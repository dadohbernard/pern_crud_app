import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.delete('/:id', ProductController.deleteProductById);
router.put('/:id', ProductController.updateProductById);
router.post('/', ProductController.insertProduct);

export default router;
