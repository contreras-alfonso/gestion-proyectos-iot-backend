import express from 'express'
import { addPlanta, editPlanta, getPlanta, getPlantas } from '../controllers/plantaController.js';

const router = express.Router();

router.post('/add', addPlanta);
router.get('/getAll',getPlantas);
router.get('/getOne',getPlanta);
router.put('/edit',editPlanta);

export default router;