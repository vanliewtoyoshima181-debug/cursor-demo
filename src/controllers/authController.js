import * as usersModel from '../models/usersModel.js';
import { ok } from '../utils/response.js';

export function register(req, res) {
  const user = usersModel.registerUser(req.body);
  return res.status(201).json(ok({ id: user.id, email: user.email, name: user.name }));
}

export function login(req, res) {
  const token = usersModel.loginUser(req.body);
  if (!token) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  return res.json(ok({ token }));
}


