import * as cartModel from '../models/cartModel.js';
import * as productsModel from '../models/productsModel.js';
import { ok } from '../utils/response.js';

export function getCart(_req, res) {
  return res.json(ok(cartModel.getCart()));
}

export function addToCart(req, res) {
  const { productId, quantity } = req.body;
  const product = productsModel.getProductById(productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  const cart = cartModel.addItem(productId, quantity);
  return res.status(201).json(ok(cart));
}

export function updateCartItem(req, res) {
  const { productId } = req.params;
  const { quantity } = req.body;
  const product = productsModel.getProductById(productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  const cart = cartModel.updateItem(productId, quantity);
  return res.json(ok(cart));
}

export function removeFromCart(req, res) {
  const { productId } = req.params;
  const cart = cartModel.removeItem(productId);
  return res.json(ok(cart));
}

export function clearCart(_req, res) {
  const cart = cartModel.clearCart();
  return res.json(ok(cart));
}


