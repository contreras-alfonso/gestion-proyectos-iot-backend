import express from 'express'
import { addPlanta, getPlantas } from '../controllers/plantaController.js';

const router = express.Router();

router.post('/add', addPlanta);
router.get('/getAll',getPlantas);

export default router;