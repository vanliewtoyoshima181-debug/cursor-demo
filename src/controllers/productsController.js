import * as productsModel from '../models/productsModel.js';
import { ok } from '../utils/response.js';

export function listProducts(_req, res) {
  return res.json(ok(productsModel.getAllProducts()));
}

export function getProductById(req, res) {
  const { id } = req.params;
  const product = productsModel.getProductById(id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  return res.json(ok(product));
}

export function createProduct(req, res) {
  const created = productsModel.createProduct(req.body);
  return res.status(201).json(ok(created));
}

export function updateProduct(req, res) {
  const { id } = req.params;
  const updated = productsModel.updateProduct(id, req.body);
  if (!updated) {
    return res.status(404).json({ error: 'Product not found' });
  }
  return res.json(ok(updated));
}

export function deleteProduct(req, res) {
  const { id } = req.params;
  const deleted = productsModel.deleteProduct(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Product not found' });
  }
  return res.status(204).send();
}


