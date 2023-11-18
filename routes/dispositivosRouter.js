import express from 'express'
import { addDispositivo, getDispositivo } from '../controllers/dispositivoController.js';

const router = express.Router();

router.post('/add', addDispositivo);
router.get('/get', getDispositivo);

export default router