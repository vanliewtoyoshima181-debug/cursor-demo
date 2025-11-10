import * as ordersModel from '../models/ordersModel.js';
import * as productsModel from '../models/productsModel.js';
import { ok } from '../utils/response.js';

export function listOrders(_req, res) {
  return res.json(ok(ordersModel.getAllOrders()));
}

export function getOrderById(req, res) {
  const { id } = req.params;
  const order = ordersModel.getOrderById(id);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  return res.json(ok(order));
}

export function createOrder(req, res) {
  const { items, customer } = req.body;
  // Validate products existence
  for (const item of items) {
    const p = productsModel.getProductById(item.productId);
    if (!p) {
      return res.status(400).json({ error: `Invalid productId ${item.productId}` });
    }
  }
  const created = ordersModel.createOrder({ items, customer });
  return res.status(201).json(ok(created));
}


