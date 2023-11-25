import express from 'express'
import { getAll, testAddData, testSensor } from '../controllers/sensorController.js';


const router = express.Router();

router.get('/testaddinfo', testAddData);
router.get('/getAll/:id', getAll);
router.post('/testJust', testSensor);

export default router
