import { Router } from 'express';
import * as productsController from '../controllers/productsController.js';
import { validateBody } from '../middleware/validate.js';
import { createProductSchema, updateProductSchema } from '../schemas/productSchemas.js';

const router = Router();

router.get('/', productsController.listProducts);
router.get('/:id', productsController.getProductById);
router.post('/', validateBody(createProductSchema), productsController.createProduct);
router.put('/:id', validateBody(updateProductSchema), productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

export default router;


