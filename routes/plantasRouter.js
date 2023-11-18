import express from 'express'
import { addPlanta, getPlanta, getPlantas } from '../controllers/plantaController.js';

const router = express.Router();

router.post('/add', addPlanta);
router.get('/getAll',getPlantas);
router.get('/getOne',getPlanta);

export default router;