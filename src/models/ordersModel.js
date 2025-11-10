import { v4 as uuid } from 'uuid';

const orders = [];

export function getAllOrders() {
  return orders;
}

export function getOrderById(id) {
  return orders.find(o => o.id === id) || null;
}

export function createOrder(input) {
  const total = input.items.reduce((sum, item) => {
    // Price lookup omitted in model to keep decoupled; assume client validated
    return sum + (item.price ?? 0) * item.quantity;
  }, 0);
  const order = {
    id: uuid(),
    items: input.items,
    customer: input.customer,
    total,
    status: 'PLACED',
    createdAt: new Date().toISOString()
  };
  orders.push(order);
  return order;
}


