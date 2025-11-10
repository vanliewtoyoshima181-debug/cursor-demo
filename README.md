# Mall Backend (Express)

Simple shopping mall backend API using Express with in-memory storage (no database).

## Quick Start

1. Ensure Node.js >= 18
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm run dev
   ```
   Server will listen on `http://0.0.0.0:3000` by default.

## Endpoints

- `GET /api/health` – health check
- `GET /api/products` – list products
- `GET /api/products/:id` – get product
- `POST /api/products` – create product
- `PUT /api/products/:id` – update product
- `DELETE /api/products/:id` – delete product

- `POST /api/auth/register` – register user
- `POST /api/auth/login` – login (returns demo token)

- `GET /api/cart` – get cart
- `POST /api/cart/items` – add to cart
- `PUT /api/cart/items/:productId` – update cart item
- `DELETE /api/cart/items/:productId` – remove cart item
- `DELETE /api/cart` – clear cart

- `GET /api/orders` – list orders
- `GET /api/orders/:id` – get order
- `POST /api/orders` – create order

Note: This project uses in-memory data stores and is intended for demo and local development only.

