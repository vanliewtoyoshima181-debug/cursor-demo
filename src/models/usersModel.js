import { v4 as uuid } from 'uuid';
import crypto from 'crypto';

const users = [];

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

export function registerUser(input) {
  const exists = users.find(u => u.email === input.email);
  if (exists) {
    throw new Error('Email already registered');
  }
  const user = {
    id: uuid(),
    email: input.email,
    name: input.name,
    passwordHash: hashPassword(input.password)
  };
  users.push(user);
  return user;
}

export function loginUser(input) {
  const { email, password } = input;
  const user = users.find(u => u.email === email);
  if (!user) return null;
  const ok = user.passwordHash === hashPassword(password);
  if (!ok) return null;
  // For demo purposes only, return a fake token
  const token = Buffer.from(`${user.id}:${Date.now()}`).toString('base64');
  return token;
}


