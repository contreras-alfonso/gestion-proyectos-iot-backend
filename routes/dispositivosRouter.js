import express from 'express'
import { addDispositivo, getDispositivo, getDispositivos, updateAsignarPlantaDispositivo, updateDesvincularDispositivo, updateEstadoDispositivo,  } from '../controllers/dispositivoController.js';

const router = express.Router();

router.post('/add', addDispositivo);
router.get('/get/:id', getDispositivo);
router.get('/getAll', getDispositivos);
router.put('/updateDispositivo', updateDesvincularDispositivo);
router.put('/updateEstadoDispositivo', updateEstadoDispositivo);
router.put('/updateAsignarPlantaDispositivo', updateAsignarPlantaDispositivo);

export default router