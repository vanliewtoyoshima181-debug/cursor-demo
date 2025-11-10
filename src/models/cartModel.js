const cart = {
  items: [] // { productId, quantity }
};

export function getCart() {
  return cart;
}

export function addItem(productId, quantity) {
  const existing = cart.items.find(i => i.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }
  return cart;
}

export function updateItem(productId, quantity) {
  const existing = cart.items.find(i => i.productId === productId);
  if (!existing) {
    cart.items.push({ productId, quantity });
  } else {
    existing.quantity = quantity;
  }
  return cart;
}

export function removeItem(productId) {
  const idx = cart.items.findIndex(i => i.productId === productId);
  if (idx !== -1) cart.items.splice(idx, 1);
  return cart;
}

export function clearCart() {
  cart.items = [];
  return cart;
}


