import { Router } from 'express';
import * as cartController from '../controllers/cartController.js';
import { validateBody } from '../middleware/validate.js';
import { addToCartSchema, updateCartItemSchema } from '../schemas/cartSchemas.js';

const router = Router();

router.get('/', cartController.getCart);
router.post('/items', validateBody(addToCartSchema), cartController.addToCart);
router.put('/items/:productId', validateBody(updateCartItemSchema), cartController.updateCartItem);
router.delete('/items/:productId', cartController.removeFromCart);
router.delete('/', cartController.clearCart);

export default router;


