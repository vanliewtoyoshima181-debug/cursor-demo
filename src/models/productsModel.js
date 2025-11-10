import { v4 as uuid } from 'uuid';

const products = [
  { id: uuid(), name: 'T-Shirt', price: 29.9, stock: 100, description: 'Cotton shirt' },
  { id: uuid(), name: 'Sneakers', price: 89.0, stock: 45, description: 'Comfortable sneakers' },
  { id: uuid(), name: 'Backpack', price: 59.5, stock: 30, description: 'Durable backpack' }
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find(p => p.id === id) || null;
}

export function createProduct(input) {
  const product = {
    id: uuid(),
    name: input.name,
    price: input.price,
    stock: input.stock ?? 0,
    description: input.description ?? ''
  };
  products.push(product);
  return product;
}

export function updateProduct(id, input) {
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) return null;
  const existing = products[idx];
  const updated = { ...existing, ...input, id };
  products[idx] = updated;
  return updated;
}

export function deleteProduct(id) {
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) return false;
  products.splice(idx, 1);
  return true;
}


