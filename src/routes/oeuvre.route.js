
import authorize from '../_middleware/autorize.js';
import express from 'express';
const router = express.Router();

import { getAllOeuvres } from '../controllers/oeuvre.controller.js';

// Oeuvres
router.get('/oeuvres/get', getAllOeuvres);


export default router;
