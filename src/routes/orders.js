import { Router } from 'express';
import * as ordersController from '../controllers/ordersController.js';
import { validateBody } from '../middleware/validate.js';
import { createOrderSchema } from '../schemas/orderSchemas.js';

const router = Router();

router.get('/', ordersController.listOrders);
router.get('/:id', ordersController.getOrderById);
router.post('/', validateBody(createOrderSchema), ordersController.createOrder);

export default router;


