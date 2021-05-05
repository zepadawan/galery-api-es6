import authorize from '../_middleware/autorize.js';
import express from 'express';
const router = express.Router();

import { getAllUsers, getUserById, loginUser, registerUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { getAllOeuvres } from '../controllers/oeuvre.controller.js';

// Users
router.post('/users/get', authorize(), getAllUsers);
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.put('/users/:id', authorize(), updateUser);
router.get('/users/:id', authorize(), getUserById);
router.delete('/users/:id', authorize(), deleteUser);

// Oeuvres
router.get('/oeuvres/get', getAllOeuvres);


export default router;